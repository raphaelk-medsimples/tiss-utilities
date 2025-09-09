import type { ComunicacaoBeneficiarioWs } from '../../client/comunicacaobeneficiario/definitions/ComunicacaoBeneficiarioWs';
import type { ReciboComunicacaoWs } from '../../client/comunicacaobeneficiario/definitions/ReciboComunicacaoWs';

export const mockPayload: ComunicacaoBeneficiarioWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'COMUNICACAO_BENEFICIARIO',
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
  comunicacaoBeneficiario: {
    numeroCarteira: '1234567890',
    nomeBeneficiario: 'João Silva',
    tipoComunicacao: 'INCLUSAO',
    dataComunicacao: '2024-01-15',
    mensagem: 'Comunicação de inclusão de beneficiário no plano de saúde',
    dadosComplementares: 'Inclusão por admissão na empresa'
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: ReciboComunicacaoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'COMUNICACAO_BENEFICIARIO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  reciboComunicacao: {
    numeroProtocolo: 'PROT_COM_20240115001',
    numeroCarteira: '1234567890',
    statusComunicacao: 'RECEBIDA',
    dataRecebimento: '2024-01-15',
    observacao: 'Comunicação recebida com sucesso'
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissReciboComunicacao_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:reciboComunicacaoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>COMUNICACAO_BENEFICIARIO</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:reciboComunicacao>
          <ans:numeroProtocolo>PROT_COM_20240115001</ans:numeroProtocolo>
          <ans:numeroCarteira>1234567890</ans:numeroCarteira>
          <ans:statusComunicacao>RECEBIDA</ans:statusComunicacao>
          <ans:dataRecebimento>2024-01-15</ans:dataRecebimento>
          <ans:observacao>Comunicação recebida com sucesso</ans:observacao>
        </ans:reciboComunicacao>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:reciboComunicacaoWS>
    </ans:tissReciboComunicacao_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
