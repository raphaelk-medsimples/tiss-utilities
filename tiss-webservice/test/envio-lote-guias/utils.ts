import type { LoteGuiasWs } from '../../client/loteguias/definitions/LoteGuiasWs';
import type { ProtocoloRecebimentoWs } from '../../client/loteguias/definitions/ProtocoloRecebimentoWs';

export const mockPayload: LoteGuiasWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'ENVIO_LOTE_GUIAS',
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
  loteGuias: {
    numeroLote: 'LOTE_GUI_20240115001',
    codigoPrestador: 'PREST001',
    quantidadeGuias: '5',
    valorTotalLote: '850.00',
    dataEnvio: '2024-01-15'
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: ProtocoloRecebimentoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'ENVIO_LOTE_GUIAS',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  protocoloRecebimento: {
    numeroProtocolo: 'PROT_GUI_20240115001',
    numeroLote: 'LOTE_GUI_20240115001',
    statusLote: 'RECEBIDO',
    dataRecebimento: '2024-01-15',
    quantidadeGuiasRecebidas: '5'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissProtocoloRecebimento_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:protocoloRecebimentoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>ENVIO_LOTE_GUIAS</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:protocoloRecebimento>
          <ans:numeroProtocolo>PROT_GUI_20240115001</ans:numeroProtocolo>
          <ans:numeroLote>LOTE_GUI_20240115001</ans:numeroLote>
          <ans:statusLote>RECEBIDO</ans:statusLote>
          <ans:dataRecebimento>2024-01-15</ans:dataRecebimento>
          <ans:quantidadeGuiasRecebidas>5</ans:quantidadeGuiasRecebidas>
        </ans:protocoloRecebimento>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:protocoloRecebimentoWS>
    </ans:tissProtocoloRecebimento_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
