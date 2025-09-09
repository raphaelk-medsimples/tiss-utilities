import type { CancelaGuiaWs } from '../../client/cancelaguia/definitions/CancelaGuiaWs';
import type { ReciboCancelaGuiaWs } from '../../client/cancelaguia/definitions/ReciboCancelaGuiaWs';

export const mockPayload: CancelaGuiaWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'CANCELA_GUIA',
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
  cancelaGuia: {
    numeroGuiaOperadora: 'OP20240115001',
    numeroGuiaPrincipal: 'GP20240115001',
    motivoCancelamento: 'CANCELAMENTO_POR_SOLICITACAO_MEDICA',
    observacao: 'Cancelamento solicitado pelo médico responsável'
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: ReciboCancelaGuiaWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'CANCELA_GUIA',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  reciboCancelaGuia: {
    numeroProtocolo: 'PROT20240115001',
    numeroGuiaOperadora: 'OP20240115001',
    numeroGuiaPrincipal: 'GP20240115001',
    situacaoCancelamento: 'CANCELADA',
    dataCancelamento: '2024-01-15',
    motivoCancelamento: 'CANCELAMENTO_POR_SOLICITACAO_MEDICA'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissReciboCancelaGuia_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:reciboCancelaGuiaWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>CANCELA_GUIA</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:reciboCancelaGuia>
          <ans:numeroProtocolo>PROT20240115001</ans:numeroProtocolo>
          <ans:numeroGuiaOperadora>OP20240115001</ans:numeroGuiaOperadora>
          <ans:numeroGuiaPrincipal>GP20240115001</ans:numeroGuiaPrincipal>
          <ans:situacaoCancelamento>CANCELADA</ans:situacaoCancelamento>
          <ans:dataCancelamento>2024-01-15</ans:dataCancelamento>
          <ans:motivoCancelamento>CANCELAMENTO_POR_SOLICITACAO_MEDICA</ans:motivoCancelamento>
        </ans:reciboCancelaGuia>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:reciboCancelaGuiaWS>
    </ans:tissReciboCancelaGuia_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
