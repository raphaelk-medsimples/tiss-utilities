import type { SolicitacaoStatusRecursoGlosaWs } from '../../client/solicitacaostatusrecursoglosa/definitions/SolicitacaoStatusRecursoGlosaWs';
import type { SituacaoProtocoloRecursoWs } from '../../client/solicitacaostatusrecursoglosa/definitions/SituacaoProtocoloRecursoWs';

export const mockPayload: SolicitacaoStatusRecursoGlosaWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLIC_STATUS_RECURSO_GLOSA',
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
  solicitacaoStatusRecursoGlosa: {
    numeroProtocoloRecurso: 'PROT_REC_20240115001',
    codigoOperadora: '67890'
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: SituacaoProtocoloRecursoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLIC_STATUS_RECURSO_GLOSA',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  situacaoProtocoloRecurso: {
    numeroProtocoloRecurso: 'PROT_REC_20240115001',
    situacaoProtocolo: 'ANALISADO',
    dataProcessamento: '2024-01-16',
    descricaoSituacao: 'Recurso analisado e aprovado'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissSituacaoProtocoloRecurso_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:situacaoProtocoloRecursoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLIC_STATUS_RECURSO_GLOSA</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:situacaoProtocoloRecurso>
          <ans:numeroProtocoloRecurso>PROT_REC_20240115001</ans:numeroProtocoloRecurso>
          <ans:situacaoProtocolo>ANALISADO</ans:situacaoProtocolo>
          <ans:dataProcessamento>2024-01-16</ans:dataProcessamento>
          <ans:descricaoSituacao>Recurso analisado e aprovado</ans:descricaoSituacao>
        </ans:situacaoProtocoloRecurso>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:situacaoProtocoloRecursoWS>
    </ans:tissSituacaoProtocoloRecurso_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
