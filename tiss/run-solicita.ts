import * as fs from 'node:fs';
import { createHash } from 'node:crypto';
import * as xml2js from 'xml2js';
import { parseStringPromise } from 'xml2js';

export const withHeader = (xml: string) => {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>\n',
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas" xmlns:xd="http://www.w3.org/2000/09/xmldsig#">\n`,
    `<soapenv:Header/>\n`,
    `<soapenv:Body>\n`,
    xml,
    '\n</soapenv:Body>\n',
    '</soapenv:Envelope>',
  ].join('')
};

export async function parseSoapResponse(xml: string): Promise<any> {
  try {
    const options = {
      tagNameProcessors: [(name: string) => name.replace(/^.*:/, '')],
      explicitArray: false
    };
    const result = await parseStringPromise(xml, options);
    return result.Envelope.Body;
  } catch (error) {
    return new Error(`Failed to parse XML: ${error}`);
  }
}

export const hashXML = (strings: TemplateStringsArray, ...values: any[]) => {
  const result = strings.reduce((acc, str, i) => 
    acc + str + (i < values.length ? values[i] ?? '' : ''), '');
  console.log(values);
  const hash = createHash('md5').update(values.filter(Boolean).join('')).digest('hex');
  return result + `\n      <ans:hash>${hash}</ans:hash>`;
};


export const AusenciaCodigoValidacaoList = [
  { codigo: "01", description: "Beneficiário internado" },
  {
    codigo: "02",
    description: "Beneficiário em situação de urgência/emergência",
  },
  {
    codigo: "03",
    description:
      "Intermitência/Instabilidade de sistemas e regularização do atendimento após saída do beneficiário do prestador de serviço",
  },
  {
    codigo: "04",
    description: "Beneficiário se negou a transmitir o número do token",
  },
  { codigo: "05", description: "Beneficiário em coleta domiciliar" },
  {
    codigo: "06",
    description: "Material para exames enviado ao prestador por terceiros",
  },
  { codigo: "07", description: "Beneficiário não possui celular" },
];

export type SolicitarProcedimentoResponse = {
  autorizacaoProcedimentoWS: {
    cabecalho: {
      identificacaoTransacao: {
        tipoTransacao: string;
        sequencialTransacao: string;
        dataRegistroTransacao: string;
        horaRegistroTransacao: string;
      };
      origem: {
        registroANS: string;
      };
      destino: {
        identificacaoPrestador: {
          codigoPrestadorNaOperadora: string;
        };
      };
      Padrao: string;
    };
    autorizacaoProcedimento: {
      autorizacaoServico: {
        dadosAutorizacao: {
          numeroGuiaPrestador: string;
          dataAutorizacao?: string;
          senha?: string;
          dataValidadeSenha: string;
        };
        tipoEtapaAutorizacao: string;
        dadosBeneficiario: {
          numeroCarteira: string;
          atendimentoRN: string;
        };
        prestadorAutorizado: {
          dadosContratado: {
            codigoPrestadorNaOperadora: string;
          };
          cnesContratado: string;
        };
        statusSolicitacao: string;
        servicosAutorizados: {
          servicoAutorizado: {
            sequencialItem: string;
            procedimento: {
              codigoTabela: string;
              codigoProcedimento: string;
              descricaoProcedimento: string;
            };
            quantidadeSolicitada: string;
            quantidadeAutorizada: string;
            motivosNegativa?: {
              codigoGlosa: string;
              descricaoGlosa: string;
            };
          };
        };
        observacao: string;
      };
    };
    hash: string;
  };
};

export async function solicitarProcedimento(
  input,
): Promise<[Record<string, any> | Error, str]> {
  const res = await fetch(
    "https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-procedimento/v4.01.00",
    {
      method: "POST",
      headers: {
        "Content-Type": "text/xml;charset=UTF-8",
      },
      body: buildXML(input),
    },
  );

  const text = await res.text();

  if (!res.ok) {
    return [new Error(`Failed: status=${res.statusText} body=${text}`), ''];
  }

  const parsed: SolicitarProcedimentoResponse = await parseSoapResponse(text);
  console.log(parsed);

  return [parsed.autorizacaoProcedimentoWS, text];
}

export function buildXML(input: SolicitacaoProcedimentoWs) {
  const withBody = (xml: string) => {
    return [
      `<ans:solicitacaoProcedimentoWS>\n`,
      xml,
      "\n</ans:solicitacaoProcedimentoWS>",
    ].join("");
  };

  const solicitacaoSP_SADT =
    input.solicitacaoProcedimento?.["solicitacaoSP-SADT"];

  const values = [
    "SOLICITACAO_PROCEDIMENTOS",
    input.cabecalho?.identificacaoTransacao?.sequencialTransacao,
    input.cabecalho?.identificacaoTransacao?.dataRegistroTransacao,
    input.cabecalho?.identificacaoTransacao?.horaRegistroTransacao,
    input.cabecalho?.origem?.identificacaoPrestador?.codigoPrestadorNaOperadora,
    input.cabecalho?.destino?.registroANS,
    input.cabecalho?.Padrao,
    input.cabecalho?.loginSenhaPrestador?.loginPrestador,
    input.cabecalho?.loginSenhaPrestador?.senhaPrestador,
    solicitacaoSP_SADT?.cabecalhoSolicitacao?.registroANS,
    solicitacaoSP_SADT?.cabecalhoSolicitacao?.numeroGuiaPrestador,
    solicitacaoSP_SADT?.codValidacao ?? "",
    solicitacaoSP_SADT?.ausenciaCodValidacao ?? "",
    solicitacaoSP_SADT?.tipoEtapaAutorizacao,
    solicitacaoSP_SADT?.dadosBeneficiario?.numeroCarteira,
    solicitacaoSP_SADT?.dadosBeneficiario?.atendimentoRN,
    solicitacaoSP_SADT?.dadosBeneficiario?.tipoIdent,
    solicitacaoSP_SADT?.dadosSolicitante?.contratadoSolicitante
      ?.codigoPrestadorNaOperadora,
    solicitacaoSP_SADT?.dadosSolicitante?.nomeContratadoSolicitante,
    solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante
      ?.nomeProfissional,
    solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante
      ?.conselhoProfissional,
    solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante
      ?.numeroConselhoProfissional,
    solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante?.UF,
    solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante?.CBOS,
    solicitacaoSP_SADT?.caraterAtendimento,
    solicitacaoSP_SADT?.dataSolicitacao,
    solicitacaoSP_SADT?.indicacaoClinica,
    ...(solicitacaoSP_SADT?.procedimentosSolicitados
      ?.map((p) =>
        [
          p.procedimento?.codigoTabela,
          p.procedimento?.codigoProcedimento,
          p.procedimento?.descricaoProcedimento,
          p.quantidadeSolicitada,
        ].filter(Boolean),
      )
      .flat() as string[]),
    solicitacaoSP_SADT?.dadosExecutante?.codigonaOperadora,
    solicitacaoSP_SADT?.dadosExecutante?.CNES,
  ].filter(Boolean);

  console.log(values);

  const hash = createHash("md5").update(values.join("")).digest("hex");

  const body = `<ans:cabecalho>
      <ans:identificacaoTransacao>
        <ans:tipoTransacao>${"SOLICITACAO_PROCEDIMENTOS"}</ans:tipoTransacao>
        <ans:sequencialTransacao>${input.cabecalho?.identificacaoTransacao?.sequencialTransacao}</ans:sequencialTransacao>
        <ans:dataRegistroTransacao>${input.cabecalho?.identificacaoTransacao?.dataRegistroTransacao}</ans:dataRegistroTransacao>
        <ans:horaRegistroTransacao>${input.cabecalho?.identificacaoTransacao?.horaRegistroTransacao}</ans:horaRegistroTransacao>
      </ans:identificacaoTransacao>
      <ans:origem>
        <ans:identificacaoPrestador>
          <ans:codigoPrestadorNaOperadora>${input.cabecalho?.origem?.identificacaoPrestador?.codigoPrestadorNaOperadora}</ans:codigoPrestadorNaOperadora>
        </ans:identificacaoPrestador>
      </ans:origem>
      <ans:destino>
        <ans:registroANS>${input.cabecalho?.destino?.registroANS}</ans:registroANS>
      </ans:destino>
      <ans:Padrao>4.01.00</ans:Padrao>
      <ans:loginSenhaPrestador>
        <ans:loginPrestador>${input.cabecalho?.loginSenhaPrestador?.loginPrestador}</ans:loginPrestador>
        <ans:senhaPrestador>${input.cabecalho?.loginSenhaPrestador?.senhaPrestador}</ans:senhaPrestador>
      </ans:loginSenhaPrestador>
    </ans:cabecalho>

    <ans:solicitacaoProcedimento>
      <ans:solicitacaoSP-SADT>
        <ans:cabecalhoSolicitacao>
          <ans:registroANS>${solicitacaoSP_SADT?.cabecalhoSolicitacao?.registroANS}</ans:registroANS>
          <ans:numeroGuiaPrestador>${solicitacaoSP_SADT?.cabecalhoSolicitacao?.numeroGuiaPrestador}</ans:numeroGuiaPrestador>
        </ans:cabecalhoSolicitacao>

        ${solicitacaoSP_SADT?.codValidacao ? `<ans:codValidacao>${solicitacaoSP_SADT?.codValidacao}</ans:codValidacao>` : ""}
        ${solicitacaoSP_SADT?.ausenciaCodValidacao ? `<ans:ausenciaCodValidacao>${solicitacaoSP_SADT?.ausenciaCodValidacao}</ans:ausenciaCodValidacao>` : ""}
        <ans:tipoEtapaAutorizacao>${solicitacaoSP_SADT?.tipoEtapaAutorizacao}</ans:tipoEtapaAutorizacao>

parameters tipoEtapaAutorizacao, codValidacao, ausenciaCodValidacao

        <ans:dadosBeneficiario>
          <ans:numeroCarteira>${solicitacaoSP_SADT?.dadosBeneficiario?.numeroCarteira}</ans:numeroCarteira>
          <ans:atendimentoRN>${solicitacaoSP_SADT?.dadosBeneficiario?.atendimentoRN}</ans:atendimentoRN>
          <ans:tipoIdent>${solicitacaoSP_SADT?.dadosBeneficiario?.tipoIdent}</ans:tipoIdent>
        </ans:dadosBeneficiario>

        <ans:dadosSolicitante>
          <ans:contratadoSolicitante>
            <ans:codigoPrestadorNaOperadora>${solicitacaoSP_SADT?.dadosSolicitante?.contratadoSolicitante?.codigoPrestadorNaOperadora}</ans:codigoPrestadorNaOperadora>
          </ans:contratadoSolicitante>
          <ans:nomeContratadoSolicitante>${solicitacaoSP_SADT?.dadosSolicitante?.nomeContratadoSolicitante}</ans:nomeContratadoSolicitante>
          <ans:profissionalSolicitante>
            <ans:nomeProfissional>${solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante?.nomeProfissional}</ans:nomeProfissional>
            <ans:conselhoProfissional>${solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante?.conselhoProfissional}</ans:conselhoProfissional>
            <ans:numeroConselhoProfissional>${solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante?.numeroConselhoProfissional}</ans:numeroConselhoProfissional>
            <ans:UF>${solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante?.UF}</ans:UF>
            <ans:CBOS>${solicitacaoSP_SADT?.dadosSolicitante?.profissionalSolicitante?.CBOS}</ans:CBOS>
          </ans:profissionalSolicitante>
        </ans:dadosSolicitante>
        <ans:caraterAtendimento>${solicitacaoSP_SADT?.caraterAtendimento}</ans:caraterAtendimento>
        <ans:dataSolicitacao>${solicitacaoSP_SADT?.dataSolicitacao}</ans:dataSolicitacao>
      ${
        solicitacaoSP_SADT?.indicacaoClinica
          ? `<ans:indicacaoClinica>${solicitacaoSP_SADT?.indicacaoClinica}</ans:indicacaoClinica>`
          : ""
      } 

        <ans:procedimentosSolicitados>
          ${solicitacaoSP_SADT?.procedimentosSolicitados
            ?.map(
              (p) => `
            <ans:procedimento>
              <ans:codigoTabela>${p.procedimento?.codigoTabela}</ans:codigoTabela>
              <ans:codigoProcedimento>${p.procedimento?.codigoProcedimento}</ans:codigoProcedimento>
              <ans:descricaoProcedimento>${p.procedimento?.descricaoProcedimento}</ans:descricaoProcedimento>
            </ans:procedimento>
            <ans:quantidadeSolicitada>1</ans:quantidadeSolicitada>  
          `,
            )
            .join("\n")}
        </ans:procedimentosSolicitados>

        <ans:dadosExecutante>
          <ans:codigonaOperadora>${solicitacaoSP_SADT?.dadosExecutante?.codigonaOperadora}</ans:codigonaOperadora>
          <ans:CNES>${solicitacaoSP_SADT?.dadosExecutante?.CNES}</ans:CNES>
        </ans:dadosExecutante>

      </ans:solicitacaoSP-SADT>
    </ans:solicitacaoProcedimento>
    <ans:hash>${hash}</ans:hash>`;

  return withHeader(withBody(body));
}

export type CabecalhoParams = IdentificacaoTransacaoParams & {
  versaoTISS:
    | "4.01.00"
    | "4.00.01"
    | "4.00.00"
    | "3.05.00"
    | "3.04.01"
    | "3.04.00"
    | "3.03.03"
    | "3.03.02"
    | "3.03.01"
    | "3.02.02"
    | "3.02.01"
    | "3.02.00"
    | "3.01.00";
  registroANS: string;
  codigoPrestador?: string;
  senhaPrestador?: string;
};

const { BasicAuthSecurity } = soap;

export const microUTCTimestamp = (dt = new Date()) =>
  BigInt(dt.getTime() * 1000 + Math.floor((performance.now() % 1) * 1000));

export function setSecurity(login: string, password: string, client: SoapClient) {
  const basicAuth = new BasicAuthSecurity(
    login,
    password,
  );
  client.setSecurity(basicAuth);
}

export type TipoTransacao =
  | 'ENVIO_LOTE_GUIAS'
  | 'ENVIO_ANEXO'
  | 'SOLIC_DEMONSTRATIVO_RETORNO'
  | 'SOLIC_STATUS_PROTOCOLO'
  | 'SOLICITACAO_PROCEDIMENTOS'
  | 'SOLICITA_STATUS_AUTORIZACAO'
  | 'VERIFICA_ELEGIBILIDADE'
  | 'CANCELA_GUIA'
  | 'COMUNICACAO_BENEFICIARIO'
  | 'RECURSO_GLOSA'
  | 'SOLIC_STATUS_RECURSO_GLOSA'
  | 'ENVIO_DOCUMENTO'
  | 'PROTOCOLO_RECEBIMENTO'
  | 'PROTOCOLO_RECEBIMENTO_ANEXO'
  | 'RECEBIMENTO_RECURSO_GLOSA'
  | 'DEMONSTRATIVO_ANALISE_CONTA'
  | 'DEMONSTRATIVO_PAGAMENTO'
  | 'DEMONSTRATIVO_ODONTOLOGIA'
  | 'SITUACAO_PROTOCOLO'
  | 'RESPOSTA_SOLICITACAO'
  | 'AUTORIZACAO_ODONTOLOGIA'
  | 'STATUS_AUTORIZACAO'
  | 'SITUACAO_ELEGIBILIDADE'
  | 'CANCELAMENTO_GUIA_RECIBO'
  | 'RECIBO_COMUNICACAO'
  | 'RESPOSTA_RECURSO_GLOSA'
  | 'RECEBIMENTO_DOCUMENTO';

export type IdentificacaoTransacaoParams = {
  tipoTransacao: TipoTransacao;
  sequencialTransacao?: string;
};

export function IdentificacaoTransacao({
  tipoTransacao,
  sequencialTransacao,
}: IdentificacaoTransacaoParams): IdentificacaoTransacaoWSDL {
  const now = new Date();
  const dataRegistroTransacao = now.toISOString().split('T')[0];
  const horaRegistroTransacao = new Date().toLocaleTimeString('en-GB', {
    hour12: false,
  });
  return {
    tipoTransacao,
    sequencialTransacao: sequencialTransacao ?? microUTCTimestamp(now).toString(),
    dataRegistroTransacao: dataRegistroTransacao,
    horaRegistroTransacao,
  };
}

export type CabecalhoParams = IdentificacaoTransacaoParams & {
  versaoTISS:
  | '4.01.00'
  | '4.00.01'
  | '4.00.00'
  | '3.05.00'
  | '3.04.01'
  | '3.04.00'
  | '3.03.03'
  | '3.03.02'
  | '3.03.01'
  | '3.02.02'
  | '3.02.01'
  | '3.02.00'
  | '3.01.00'
  registroANS: string;
  codigoPrestador: string;
  senhaPrestador: string;
};

export function Cabecalho({
  versaoTISS,
  registroANS,
  codigoPrestador,
  tipoTransacao,
  sequencialTransacao,
  senhaPrestador,
}: CabecalhoParams): CabecalhoWSDL {
  return {
    identificacaoTransacao: IdentificacaoTransacao({
      tipoTransacao,
      sequencialTransacao,
    }),
    origem: {
      identificacaoPrestador: {
        codigoPrestadorNaOperadora: codigoPrestador,
      },
    },
    destino: {
      registroANS,
    },
    Padrao: versaoTISS,
    loginSenhaPrestador: {
      loginPrestador: codigoPrestador,
      senhaPrestador: createHash('md5').update(senhaPrestador).digest('hex'),
    },
  };
}

export function AmilCabecalho(params: Omit<CabecalhoParams, 'registroANS'>) {
  return Cabecalho({
    ...params,
    registroANS: '326305',
  });
}

export async function calcHash(xmlString: string): Promise<string> {
  const parser = new xml2js.Parser({
    explicitArray: false,
    explicitChildren: false,
    mergeAttrs: false,
  });

  const jsonObj = parser.parseStringPromise(xmlString);

  const values = extractValues(jsonObj);

  const hash = createHash('md5').update(values, 'utf-8').digest('hex');

  return hash;
}

// biome-ignore lint/suspicious/noExplicitAny:
function extractValues(obj: any): string {
  if (typeof obj === 'string') {
    return obj.trim();
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.values(obj).map(extractValues).join('');
  }
  return '';
}

const profissionalSolicitanteFelipe = {
  nomeProfissional: "Felipe Henrique Yazawa Santos",
  conselhoProfissional: "06",
  numeroConselhoProfissional: "176861",
  UF: "35",
  CBOS: "225135",
};
const profissionalSolicitanteGuilherme = {
  nomeProfissional: "Guilherme Machado de Figueiredo Murari",
  conselhoProfissional: "06",
  numeroConselhoProfissional: "238827",
  UF: "35",
  CBOS: "225120",
};

const sequencialTransacao = (new Date().getTime() + "").slice(0, -1)

const input: SolicitacaoProcedimentoWs = {
  cabecalho: Cabecalho({
    versaoTISS: "4.01.00",
    registroANS: "326305",
    tipoTransacao: "SOLICITACAO_PROCEDIMENTOS",
    codigoPrestador: "70434816",
    senhaPrestador: "Okdjdk22--",
    sequencialTransacao,
  }),
  solicitacaoProcedimento: {
    "solicitacaoSP-SADT": {
      cabecalhoSolicitacao: {
        registroANS: "326305",
        numeroGuiaPrestador: new Date().getTime() + "",
      },
      tipoEtapaAutorizacao: "1",
      dadosBeneficiario: {
        numeroCarteira: "093897586",
        atendimentoRN: "N",
        tipoIdent: "03",
      },
      caraterAtendimento: "1",
      dataSolicitacao: new Date().toISOString().split("T")[0],
      dadosSolicitante: {
        contratadoSolicitante: { codigoPrestadorNaOperadora: "70434816" },
        nomeContratadoSolicitante: "MRSPF CLINICA MEDICA LTDA",
        profissionalSolicitante: profissionalSolicitanteFelipe,
      },
      procedimentosSolicitados: [
        {
          procedimento: {
            codigoTabela: "22",
            codigoProcedimento: "10101012",
            descricaoProcedimento:
              "Consulta em consultório (no horário normal ou preestabelecido)",
          },
          quantidadeSolicitada: "1",
        },
      ],
      dadosExecutante: {
        codigonaOperadora: "70434816",
        CNES: "2998386",
      },
    },
  },
};

// const xml = buildXML(input);
// console.log(xml);

const logsDir = `./logs/solicita-procedimento/${new Date().toISOString().split('T')[0]}/${sequencialTransacao}`
fs.mkdirSync(`${logsDir}`, { recursive: true })

const xml = buildXML(input);
console.log(xml);
fs.writeFileSync(`${logsDir}/request1.xml`, xml);

console.log(JSON.stringify(input))

// throw Error('');

const [response, xmlResponse] = await solicitarProcedimento(input);
if (response instanceof Error) {
  console.error(response);
  throw response;
}
if (response?.autorizacaoProcedimento?.mensagemErro) {
  console.error(response.autorizacaoProcedimento.mensagemErro);
  throw new Error(JSON.stringify(response.autorizacaoProcedimento.mensagemErro));
}

console.log('response', JSON.stringify(response, null, 2));

fs.writeFileSync(`${logsDir}/response.json`, JSON.stringify(response, null, 2));
fs.writeFileSync(`${logsDir}/response.xml`, xmlResponse);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const codValidacao = await new Promise<string>((resolve) => {
  rl.question('Enter codValidacao value: ', (answer) => {
    rl.close();
    resolve(answer);
  });
});

const [response2, xmlResponse2] = await solicitarProcedimento({
  ...input,
  solicitacaoProcedimento: {
    ...input.solicitacaoProcedimento,
    "solicitacaoSP-SADT": {
      ...input.solicitacaoProcedimento?.["solicitacaoSP-SADT"],
      codValidacao,
      tipoEtapaAutorizacao: "2",
    }
  },
});