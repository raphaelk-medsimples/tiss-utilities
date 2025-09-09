import type { PedidoElegibilidadeWs } from '../../tiss-webservice/client/verificaelegibilidade/definitions/PedidoElegibilidadeWs';
import type { RespostaElegibilidadeWs } from '../../tiss-webservice/client/verificaelegibilidade/definitions/RespostaElegibilidadeWs';
import type { SolicitacaoStatusAutorizacaoWs } from '../../tiss-webservice/client/solicitacaostatusautorizacao/definitions/SolicitacaoStatusAutorizacaoWs';
import type { SituacaoAutorizacaoWs } from '../../tiss-webservice/client/solicitacaostatusautorizacao/definitions/SituacaoAutorizacaoWs';
import type { LoteGuiasWs } from '../../tiss-webservice/client/loteguias/definitions/LoteGuiasWs';
import type { ProtocoloRecebimentoWs } from '../../tiss-webservice/client/loteguias/definitions/ProtocoloRecebimentoWs';
import type { CabecalhoParams, TipoTransacao } from '../utils';
import type { TissRequestBase } from '../tiss-service';

// Test Cabecalho Parameters
export const validCabecalhoParams: CabecalhoParams = {
  versaoTISS: '4.01.00',
  registroANS: '326305',
  codigoPrestador: 'PREST001',
  senhaPrestador: 'senha123',
  tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
  sequencialTransacao: '123456789',
};

export const amilCabecalhoParams: Omit<CabecalhoParams, 'registroANS'> = {
  versaoTISS: '4.01.00',
  codigoPrestador: 'AMIL001',
  senhaPrestador: 'amilsenha123',
  tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
  sequencialTransacao: 'AMIL123456789',
};

// Test Request Fixtures
export const verificaElegibilidadeRequest: PedidoElegibilidadeWs & TissRequestBase = {
  tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
  sequencialTransacao: '123456789',
  beneficiario: {
    numeroCarteira: '123456789012345',
    atendimentoRN: 'S',
    nomeBeneficiario: 'João da Silva Santos',
    nomeSocial: null,
  },
  prestador: {
    codigoPrestadorNaOperadora: 'PREST001',
  },
};

export const solicitaStatusAutorizacaoRequest: SolicitacaoStatusAutorizacaoWs & TissRequestBase = {
  tipoTransacao: 'SOLICITA_STATUS_AUTORIZACAO',
  sequencialTransacao: '987654321',
  numeroAutorizacao: 'AUTH123456789',
  prestador: {
    codigoPrestadorNaOperadora: 'PREST001',
  },
};

export const envioLoteGuiasRequest: LoteGuiasWs & TissRequestBase = {
  tipoTransacao: 'ENVIO_LOTE_GUIAS',
  sequencialTransacao: 'LOTE123456789',
  loteGuias: {
    numeroLote: 'LOTE001',
    valorTotalLote: '1500.00',
    guias: [{
      numeroGuia: 'GUIA001',
      tipoGuia: 'CONSULTA',
    }],
  },
};

// Test Response Fixtures
export const verificaElegibilidadeResponse: RespostaElegibilidadeWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SITUACAO_ELEGIBILIDADE',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15',
      horaRegistroTransacao: '10:30:45',
    },
    origem: {
      identificacaoPrestador: {
        codigoPrestadorNaOperadora: 'PREST001',
      },
    },
    destino: {
      registroANS: '326305',
    },
    Padrao: '4.01.00',
  },
  beneficiarioValido: true,
  contratadoValido: true,
  respostaBeneficiario: {
    numeroCarteira: '123456789012345',
    nomeBeneficiario: 'João da Silva Santos',
    validadeBeneficiario: '2025-12-31',
  },
};

export const solicitaStatusAutorizacaoResponse: SituacaoAutorizacaoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'STATUS_AUTORIZACAO',
      sequencialTransacao: '987654321',
      dataRegistroTransacao: '2024-01-15',
      horaRegistroTransacao: '11:15:30',
    },
  },
  situacaoAutorizacao: 'AUTORIZADA',
  numeroAutorizacao: 'AUTH123456789',
  dataAutorizacao: '2024-01-15',
};

export const envioLoteGuiasResponse: ProtocoloRecebimentoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'PROTOCOLO_RECEBIMENTO',
      sequencialTransacao: 'LOTE123456789',
      dataRegistroTransacao: '2024-01-15',
      horaRegistroTransacao: '12:00:00',
    },
  },
  numeroProtocolo: 'PROT123456789',
  dataRecebimento: '2024-01-15',
  valorTotalProtocolo: '1500.00',
};

// Error Response Fixtures
export const errorResponse = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SITUACAO_ELEGIBILIDADE',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15',
      horaRegistroTransacao: '10:30:45',
    },
    falhaNegocio: 'Beneficiário não encontrado',
  },
  beneficiarioValido: false,
  contratadoValido: false,
};

// Test Data Variations
export const invalidCabecalhoVariations = {
  emptyRegistroANS: {
    ...validCabecalhoParams,
    registroANS: '',
  },
  emptyCodigoPrestador: {
    ...validCabecalhoParams,
    codigoPrestador: '',
  },
  emptySenhaPrestador: {
    ...validCabecalhoParams,
    senhaPrestador: '',
  },
  emptyVersaoTISS: {
    ...validCabecalhoParams,
    versaoTISS: '' as any,
  },
  whitespaceRegistroANS: {
    ...validCabecalhoParams,
    registroANS: '   ',
  },
  nullRegistroANS: {
    ...validCabecalhoParams,
    registroANS: null as any,
  },
  undefinedCodigoPrestador: {
    ...validCabecalhoParams,
    codigoPrestador: undefined as any,
  },
};

// XML Test Data
export const sampleXmlRequest = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissVerificaElegibilidade_Operation>
      <ans:pedidoElegibilidadeWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>VERIFICA_ELEGIBILIDADE</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
            <ans:horaRegistroTransacao>10:30:45</ans:horaRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:beneficiario>
          <ans:numeroCarteira>123456789012345</ans:numeroCarteira>
          <ans:nomeBeneficiario>João da Silva Santos</ans:nomeBeneficiario>
        </ans:beneficiario>
      </ans:pedidoElegibilidadeWS>
    </ans:tissVerificaElegibilidade_Operation>
  </soap:Body>
</soap:Envelope>`;

export const sampleXmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissVerificaElegibilidade_OperationResponse>
      <ans:respostaElegibilidadeWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SITUACAO_ELEGIBILIDADE</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
            <ans:horaRegistroTransacao>10:30:45</ans:horaRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:beneficiarioValido>true</ans:beneficiarioValido>
        <ans:contratadoValido>true</ans:contratadoValido>
      </ans:respostaElegibilidadeWS>
    </ans:tissVerificaElegibilidade_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

// Complex Object for Hash Testing
export const complexObjectForHashing = {
  level1: {
    string: 'test value',
    number: 12345,
    boolean: true,
    level2: {
      array: [1, 2, 3, 'four', 'five'],
      nested: {
        deep: 'very deep value',
        level3: {
          final: 'final level',
          nullValue: null,
          undefinedValue: undefined,
        },
      },
    },
  },
  topLevelArray: ['item1', 'item2', { nestedInArray: 'value' }],
  specialChars: 'Special chars: áéíóú çñü @#$%^&*()',
  emptyString: '',
  whitespace: '   spaces   ',
};

// Expected Hash Values (for testing consistency)
export const expectedHashes = {
  simpleObject: '5d41402abc4b2a76b9719d911017c592', // MD5 of 'hello'
  complexObject: '8b1a9953c4611296a827abf8c47804d7', // Expected hash for complexObjectForHashing
  emptyObject: 'd41d8cd98f00b204e9800998ecf8427e', // MD5 of empty string
};

// Mock SOAP Response Structure
export const mockSoapResponseStructure = [
  'result_data',   // The actual response data
  'raw_response',  // Raw SOAP response XML
  'soap_header',   // SOAP headers
  'raw_request',   // Raw SOAP request XML
];

// Test Scenarios
export const testScenarios = {
  success: {
    name: 'Successful Request',
    request: verificaElegibilidadeRequest,
    response: verificaElegibilidadeResponse,
    expectation: 'should return success response with valid data',
  },
  error: {
    name: 'Error Response',
    request: verificaElegibilidadeRequest,
    response: errorResponse,
    expectation: 'should handle error response gracefully',
  },
  timeout: {
    name: 'Request Timeout',
    request: verificaElegibilidadeRequest,
    error: new Error('Request timeout'),
    expectation: 'should handle timeout errors',
  },
  soapFault: {
    name: 'SOAP Fault',
    request: verificaElegibilidadeRequest,
    error: new Error('SOAP-ENV:Server.userException'),
    expectation: 'should handle SOAP fault errors',
  },
};
