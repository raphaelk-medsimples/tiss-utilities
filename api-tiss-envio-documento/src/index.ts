import crypto from "node:crypto";

function extractXmlValuesAndHash(xmlContent) {
  const cleanedXml = xmlContent.replace(/\{\{HASH\}\}/g, "");
  const valueRegex = />([^<]+)</g;
  const values = [];
  let match;
  while ((match = valueRegex.exec(cleanedXml)) !== null) {
    const value = match[1].trim();
    if (value) {
      values.push(value);
    }
  }
  const concatenatedValues = values.join("");
  const hash = crypto.createHash("md5").update(concatenatedValues).digest(
    "hex",
  );
  const hashedXml = xmlContent.replace("{{HASH}}", hash);
  return { values, hash, hashedXml };
}

const AMIL = '326305';

const MD5 = (password) => crypto.createHash("md5").update(password).digest(
  "hex",
);

const buildXML = ({
  codigoPrestadorNaOperadora,
  registroANS,
  senhaPrestador,
  numeroProtocolo, tipoDocumento, nomeArquivo, conteudoArquivo, numeroGuiaPrincipal, numeroGuiaOperadora, dataEnvio, observacao,
}) => `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas" xmlns:xd="http://www.w3.org/2000/09/xmldsig#">
    <soapenv:Header/>
    <soapenv:Body>
        <ans:envioDocumentoWS>
            <ans:cabecalho>
                <ans:identificacaoTransacao>
                    <ans:tipoTransacao>ENVIO_DOCUMENTO</ans:tipoTransacao>
                    <ans:sequencialTransacao>${new Date().getTime().toString().slice(0, 12)}</ans:sequencialTransacao>
                    <ans:dataRegistroTransacao>${new Date().toISOString().split("T")[0]}</ans:dataRegistroTransacao>
                    <ans:horaRegistroTransacao>${new Date().toISOString().split("T")[1].split(".")[0]}</ans:horaRegistroTransacao>
                </ans:identificacaoTransacao>
                <ans:origem>
                    <ans:identificacaoPrestador>
                        <ans:codigoPrestadorNaOperadora>${codigoPrestadorNaOperadora}</ans:codigoPrestadorNaOperadora>
                    </ans:identificacaoPrestador>
                </ans:origem>
                <ans:destino>
                    <ans:registroANS>${registroANS}</ans:registroANS>
                </ans:destino>
                <ans:Padrao>4.01.00</ans:Padrao>
                <ans:loginSenhaPrestador>
                    <ans:loginPrestador>${codigoPrestadorNaOperadora}</ans:loginPrestador>
                    <ans:senhaPrestador>${MD5(senhaPrestador)}</ans:senhaPrestador>
                </ans:loginSenhaPrestador>
            </ans:cabecalho>
            <ans:envioDocumento>
                <ans:numeroProtocolo>${numeroProtocolo}</ans:numeroProtocolo>
                ${numeroGuiaPrincipal ? `<ans:numeroGuiaPrincipal>${numeroGuiaPrincipal}</ans:numeroGuiaPrincipal>` : ''}
                ${numeroGuiaOperadora ? `<ans:numeroGuiaOperadora>${numeroGuiaOperadora}</ans:numeroGuiaOperadora>` : ''}
                <ans:tipoDocumento>${tipoDocumento}</ans:tipoDocumento>
                <ans:nomeArquivo>${nomeArquivo}</ans:nomeArquivo>
                <ans:conteudoArquivo>${conteudoArquivo}</ans:conteudoArquivo>
                <ans:dataEnvio>${dataEnvio ?? new Date().toISOString().split("T")[0]}</ans:dataEnvio>
                ${observacao ? `<ans:observacao>${observacao}</ans:observacao>` : ''}
            </ans:envioDocumento>
            <ans:hash>{{HASH}}</ans:hash>
        </ans:envioDocumentoWS>
    </soapenv:Body>
</soapenv:Envelope>`;

export default {
  async fetch(request, env, ctx) {
    const { url } = request;
    const { searchParams } = new URL(url);
    const params = request.body ? await request.json() : {};
    const {
      codigoPrestadorNaOperadora,
      registroANS = AMIL,
      senhaPrestador,
      numeroProtocolo, tipoDocumento, nomeArquivo, conteudoArquivo, numeroGuiaPrincipal, numeroGuiaOperadora, dataEnvio, observacao,
    } = params;


    const paramNumeroProtocolo = numeroProtocolo ?? searchParams.get('numeroProtocolo');
    if (!paramNumeroProtocolo) return Response.json(
      { success: false, errors: [{ message: "Bad Request: numeroProtocolo is required" }]}, 
      { status: 400 }
    );
    const paramTipoDocumento = tipoDocumento ?? searchParams.get('tipoDocumento');
    if (!paramTipoDocumento) return Response.json(
      { success: false, errors: [{ message: "Bad Request: tipoDocumento is required" }]}, 
      { status: 400 }
    );
    const paramNomeArquivo = nomeArquivo ?? searchParams.get('nomeArquivo');
    if (!paramNomeArquivo) return Response.json(
      { success: false, errors: [{ message: "Bad Request: nomeArquivo is required" }]}, 
      { status: 400 }
    );
    const paramConteudoArquivo = conteudoArquivo ?? searchParams.get('conteudoArquivo');
    if (!paramConteudoArquivo) return Response.json(
      { success: false, errors: [{ message: "Bad Request: conteudoArquivo is required" }]}, 
      { status: 400 }
    );

    const { login, password } = JSON.parse(
      await env.HUMMANAMAIS_MAIN_LOGIN_PASSWORD.get()
    );

    const { hashedXml } = extractXmlValuesAndHash(buildXML({
      codigoPrestadorNaOperadora: codigoPrestadorNaOperadora ?? login,
      registroANS,
      senhaPrestador: senhaPrestador ?? password,
      numeroProtocolo: paramNumeroProtocolo, tipoDocumento: paramTipoDocumento, nomeArquivo: paramNomeArquivo, conteudoArquivo: paramConteudoArquivo,
      numeroGuiaPrincipal: numeroGuiaPrincipal ?? searchParams.get('numeroGuiaPrincipal'), numeroGuiaOperadora: numeroGuiaOperadora ?? searchParams.get('numeroGuiaOperadora'), dataEnvio: dataEnvio ?? searchParams.get('dataEnvio'), observacao: observacao ?? searchParams.get('observacao'),
    }));

    const response = await fetch('https://api.servicos.grupoamil.com.br/api-tiss-envio-documento/v4.01.00', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=utf-8',
      },
      body: hashedXml
    });

    if (!response.ok) {
      return response;
    }

    const rawBody = await response.text()
    let json = await xmlToJson(rawBody)

    return Response.json({
      raw: rawBody,
      json,
      headers: Object.fromEntries(response.headers.entries()),
    }, {
      status: response.status,
    })
  }
};

function xmlToJson(xmlString) {
  const result = {};
  const stack = [result];

  const rewriter = new HTMLRewriter().on('*', {
    element(element) {
      const tagName = element.tagName.toLowerCase();
      const parent = stack[stack.length - 1];
      const elementObj = {};

      // Handle attributes
      const attrs = {};
      for (const [name, value] of element.attributes) {
        attrs[name] = value;
      }
      if (Object.keys(attrs).length > 0) {
        elementObj['@attributes'] = attrs;
      }

      // Add to parent structure
      if (parent[tagName]) {
        if (!Array.isArray(parent[tagName])) {
          parent[tagName] = [parent[tagName]];
        }
        parent[tagName].push(elementObj);
      } else {
        parent[tagName] = elementObj;
      }

      stack.push(elementObj);

      element.onEndTag(() => {
        stack.pop();
      });
    },

    text(text) {
      const content = text.text.trim();
      if (content && stack.length > 1) {
        const current = stack[stack.length - 1];
        current['#text'] = (current['#text'] || '') + content;
      }
    }
  });

  return rewriter
    .transform(new Response(xmlString))
    .text()
    .then(() => result);
}