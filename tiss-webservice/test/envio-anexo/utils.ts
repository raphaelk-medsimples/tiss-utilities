import type { LoteAnexoWs } from '../../client/loteanexo/definitions/LoteAnexoWs';
import type { ProtocoloRecebimentoAnexoWs } from '../../client/loteanexo/definitions/ProtocoloRecebimentoAnexoWs';

export const mockPayload: LoteAnexoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'ENVIO_ANEXO',
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
  loteAnexo: {
    numeroLote: 'LOTE_ANX_20240115001',
    codigoPrestador: 'PREST001',
    anexos: [
      {
        sequencialItem: '1',
        numeroGuia: 'GP20240115001',
        tipoAnexo: 'DOCUMENTO',
        nomeArquivo: 'anexo1.pdf',
        conteudoArquivo: 'JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCg=='
      }
    ]
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: ProtocoloRecebimentoAnexoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'ENVIO_ANEXO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  protocoloRecebimentoAnexo: {
    numeroProtocolo: 'PROT_ANX_20240115001',
    numeroLote: 'LOTE_ANX_20240115001',
    statusLote: 'RECEBIDO',
    dataRecebimento: '2024-01-15',
    quantidadeAnexos: '1'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissProtocoloRecebimentoAnexo_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:protocoloRecebimentoAnexoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>ENVIO_ANEXO</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:protocoloRecebimentoAnexo>
          <ans:numeroProtocolo>PROT_ANX_20240115001</ans:numeroProtocolo>
          <ans:numeroLote>LOTE_ANX_20240115001</ans:numeroLote>
          <ans:statusLote>RECEBIDO</ans:statusLote>
          <ans:dataRecebimento>2024-01-15</ans:dataRecebimento>
          <ans:quantidadeAnexos>1</ans:quantidadeAnexos>
        </ans:protocoloRecebimentoAnexo>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:protocoloRecebimentoAnexoWS>
    </ans:tissProtocoloRecebimentoAnexo_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
