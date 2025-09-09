import { createHash } from 'node:crypto';
import * as xml2js from 'xml2js';

import type { Client as SoapClient } from 'soap';
import * as soap from 'soap';
import type {
  Cabecalho as CabecalhoWSDL,
  IdentificacaoTransacao as IdentificacaoTransacaoWSDL,
} from '../tiss-webservice/client/verificaelegibilidade/definitions/PedidoElegibilidadeWs';

const { BasicAuthSecurity } = soap;

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
    | '3.01.00';
  registroANS: string;
  codigoPrestador: string;
  senhaPrestador: string;
};

export const microUTCTimestamp = (dt = new Date()) =>
  BigInt(dt.getTime() * 1000 + Math.floor((performance.now() % 1) * 1000));

export function setSecurity(login: string, password: string, client: SoapClient) {
  const basicAuth = new BasicAuthSecurity(
    login,
    password,
  );
  client.setSecurity(basicAuth);
}

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
    sequencialTransacao: sequencialTransacao ?? microUTCTimestamp(now).toString().slice(0, 12),
    dataRegistroTransacao: dataRegistroTransacao,
    horaRegistroTransacao,
  };
}


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

  const jsonObj = await parser.parseStringPromise(xmlString);

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

export function calcObjectHash(obj: unknown): string {
  const values = extractValues(obj);
  return createHash('md5').update(values, 'utf-8').digest('hex');
}

export function validateCabecalhoParams(params: CabecalhoParams): void {
  if (!params.registroANS?.trim()) {
    throw new Error('registroANS is required and cannot be empty');
  }
  if (!params.codigoPrestador?.trim()) {
    throw new Error('codigoPrestador is required and cannot be empty');
  }
  if (!params.senhaPrestador?.trim()) {
    throw new Error('senhaPrestador is required and cannot be empty');
  }
  if (!params.versaoTISS?.trim()) {
    throw new Error('versaoTISS is required and cannot be empty');
  }
}

export function enhancedCabecalho(params: CabecalhoParams): CabecalhoWSDL {
  validateCabecalhoParams(params);
  
  return Cabecalho(params);
}

export function enhancedAmilCabecalho(params: Omit<CabecalhoParams, 'registroANS'>): CabecalhoWSDL {
  return enhancedCabecalho({
    ...params,
    registroANS: '326305',
  });
}
