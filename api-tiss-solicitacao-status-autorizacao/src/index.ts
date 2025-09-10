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
  numeroCarteira, numeroGuiaOperadora, numeroGuiaPrincipal, nomeBeneficiario,
}) => `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas" xmlns:xd="http://www.w3.org/2000/09/xmldsig#">
    <soapenv:Header/>
    <soapenv:Body>
        <ans:solicitacaoStatusAutorizacaoWS>
            <ans:cabecalho>
                <ans:identificacaoTransacao>
                    <ans:tipoTransacao>SOLICITA_STATUS_AUTORIZACAO</ans:tipoTransacao>
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
            <ans:solicitacaoStatusAutorizacao>
                <ans:identificacaoSolicitacao>
                    ${numeroGuiaOperadora ? `<ans:numeroGuiaOperadora>${numeroGuiaOperadora}</ans:numeroGuiaOperadora>` : ''}
                    ${numeroGuiaPrincipal ? `<ans:numeroGuiaPrincipal>${numeroGuiaPrincipal}</ans:numeroGuiaPrincipal>` : ''}
                </ans:identificacaoSolicitacao>
                <ans:dadosBeneficiario>
                    <ans:numeroCarteira>${numeroCarteira}</ans:numeroCarteira>
                    ${nomeBeneficiario ? `<ans:nomeBeneficiario>${nomeBeneficiario}</ans:nomeBeneficiario>` : ''}
                </ans:dadosBeneficiario>
            </ans:solicitacaoStatusAutorizacao>
            <ans:hash>{{HASH}}</ans:hash>
        </ans:solicitacaoStatusAutorizacaoWS>
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
      numeroCarteira, numeroGuiaOperadora, numeroGuiaPrincipal, nomeBeneficiario,
    } = params;


    const paramNumeroCarteira = numeroCarteira ?? searchParams.get('numeroCarteira');
    if (!paramNumeroCarteira) return Response.json(
      { success: false, errors: [{ message: "Bad Request: numeroCarteira is required" }]}, 
      { status: 400 }
    );

    const { login, password } = JSON.parse(
      await env.HUMMANAMAIS_MAIN_LOGIN_PASSWORD.get()
    );

    const { hashedXml } = extractXmlValuesAndHash(buildXML({
      codigoPrestadorNaOperadora: codigoPrestadorNaOperadora ?? login,
      registroANS,
      senhaPrestador: senhaPrestador ?? password,
      numeroCarteira: paramNumeroCarteira,
      numeroGuiaOperadora: numeroGuiaOperadora ?? searchParams.get('numeroGuiaOperadora'), numeroGuiaPrincipal: numeroGuiaPrincipal ?? searchParams.get('numeroGuiaPrincipal'), nomeBeneficiario: nomeBeneficiario ?? searchParams.get('nomeBeneficiario'),
    }));

    const response = await fetch('https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-autorizacao/v4.01.00', {
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