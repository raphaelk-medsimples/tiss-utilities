import type { SolicitacaoStatusProtocoloWs } from '../../client/solicitacaostatusprotocolo/definitions/SolicitacaoStatusProtocoloWs';
import type { SituacaoProtocoloWs } from '../../client/solicitacaostatusprotocolo/definitions/SituacaoProtocoloWs';

export const mockPayload: SolicitacaoStatusProtocoloWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLIC_STATUS_PROTOCOLO',
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
  solicitacaoStatusProtocolo: {
    numeroProtocolo: 'PROT20240115001',
    codigoOperadora: '67890'
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: SituacaoProtocoloWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLIC_STATUS_PROTOCOLO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  situacaoProtocolo: {
    numeroProtocolo: 'PROT20240115001',
    situacaoProtocolo: 'PROCESSADO',
    dataProcessamento: '2024-01-15',
    descricaoSituacao: 'Protocolo processado com sucesso'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissSituacaoProtocolo_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:situacaoProtocoloWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLIC_STATUS_PROTOCOLO</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:situacaoProtocolo>
          <ans:numeroProtocolo>PROT20240115001</ans:numeroProtocolo>
          <ans:situacaoProtocolo>PROCESSADO</ans:situacaoProtocolo>
          <ans:dataProcessamento>2024-01-15</ans:dataProcessamento>
          <ans:descricaoSituacao>Protocolo processado com sucesso</ans:descricaoSituacao>
        </ans:situacaoProtocolo>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:situacaoProtocoloWS>
    </ans:tissSituacaoProtocolo_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
