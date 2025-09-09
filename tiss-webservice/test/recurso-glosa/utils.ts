import type { LoteRecursoGlosaWs } from '../../client/recursoglosa/definitions/LoteRecursoGlosaWs';
import type { ProtocoloRecebimentoRecursoWs } from '../../client/recursoglosa/definitions/ProtocoloRecebimentoRecursoWs';

export const mockPayload: LoteRecursoGlosaWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'RECURSO_GLOSA',
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
  loteRecursoGlosa: {
    numeroLote: 'LOTE_REC_20240115001',
    codigoPrestador: 'PREST001',
    dataEnvio: '2024-01-15',
    recursos: [
      {
        numeroGuia: 'GP20240115001',
        codigoGlosa: '1807',
        descricaoRecurso: 'Procedimento realizado conforme protocolo médico',
        valorRecurso: '150.00'
      }
    ]
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: ProtocoloRecebimentoRecursoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'RECURSO_GLOSA',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  protocoloRecebimentoRecurso: {
    numeroProtocolo: 'PROT_REC_20240115001',
    numeroLote: 'LOTE_REC_20240115001',
    statusLote: 'RECEBIDO',
    dataRecebimento: '2024-01-15',
    quantidadeRecursos: '1'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissProtocoloRecebimentoRecurso_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:protocoloRecebimentoRecursoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>RECURSO_GLOSA</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:protocoloRecebimentoRecurso>
          <ans:numeroProtocolo>PROT_REC_20240115001</ans:numeroProtocolo>
          <ans:numeroLote>LOTE_REC_20240115001</ans:numeroLote>
          <ans:statusLote>RECEBIDO</ans:statusLote>
          <ans:dataRecebimento>2024-01-15</ans:dataRecebimento>
          <ans:quantidadeRecursos>1</ans:quantidadeRecursos>
        </ans:protocoloRecebimentoRecurso>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:protocoloRecebimentoRecursoWS>
    </ans:tissProtocoloRecebimentoRecurso_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
