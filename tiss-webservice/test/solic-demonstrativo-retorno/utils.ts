import type { SolicitacaoDemonstrativoRetornoWs } from '../../client/solicitacaodemonstrativoretorno/definitions/SolicitacaoDemonstrativoRetornoWs';
import type { DemonstrativoRetornoWs } from '../../client/solicitacaodemonstrativoretorno/definitions/DemonstrativoRetornoWs';

export const mockPayload: SolicitacaoDemonstrativoRetornoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLIC_DEMONSTRATIVO_RETORNO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    },
    origem: {
      codigoOperadora: '12345',
      codigoRegistro: 'REG001'
    },
    destino: {
      codigoOperadora: '67890',
      codigoRegistro: 'REG002'
    },
    Padrao: '4.00.00',
    loginSenhaPrestador: {
      loginPrestador: 'user123',
      senhaPrestador: 'pass123'
    }
  },
  solicitacaoDemonstrativoRetorno: {
    numeroProtocolo: 'PROT20240115001',
    codigoPrestador: 'PREST001',
    anoMesCompetencia: '202401',
    dataVencimento: '2024-01-31'
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: DemonstrativoRetornoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLIC_DEMONSTRATIVO_RETORNO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  demonstrativoRetorno: {
    numeroProtocolo: 'PROT20240115001',
    statusDemonstrativo: 'DISPONIVEL',
    dataDisponibilizacao: '2024-01-20',
    valorTotal: '2450.00',
    observacoes: 'Demonstrativo disponível para download'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissDemonstrativoRetorno_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:demonstrativoRetornoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLIC_DEMONSTRATIVO_RETORNO</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:demonstrativoRetorno>
          <ans:numeroProtocolo>PROT20240115001</ans:numeroProtocolo>
          <ans:statusDemonstrativo>DISPONIVEL</ans:statusDemonstrativo>
          <ans:dataDisponibilizacao>2024-01-20</ans:dataDisponibilizacao>
          <ans:valorTotal>2450.00</ans:valorTotal>
          <ans:observacoes>Demonstrativo disponível para download</ans:observacoes>
        </ans:demonstrativoRetorno>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:demonstrativoRetornoWS>
    </ans:tissDemonstrativoRetorno_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
