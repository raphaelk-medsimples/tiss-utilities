import type { SolicitacaoStatusAutorizacaoWs } from '../../client/solicitacaostatusautorizacao/definitions/SolicitacaoStatusAutorizacaoWs';
import type { SituacaoAutorizacaoWs } from '../../client/solicitacaostatusautorizacao/definitions/SituacaoAutorizacaoWs';

export const mockPayload: SolicitacaoStatusAutorizacaoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLICITA_STATUS_AUTORIZACAO',
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
  solicitacaoStatusAutorizacao: {
    identificacaoSolicitacao: {
      numeroGuiaOperadora: 'OP20240115001',
      numeroGuiaPrincipal: 'GP20240115001'
    },
    dadosBeneficiario: {
      numeroCarteira: '1234567890',
      nomeBeneficiario: 'João Silva'
    },
    dadosContratado: {
      codigoPrestador: 'PREST001',
      codigoCNES: '1234567'
    }
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: SituacaoAutorizacaoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLICITA_STATUS_AUTORIZACAO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  situacaoAutorizacao: {
    numeroGuiaOperadora: 'OP20240115001',
    numeroGuiaPrincipal: 'GP20240115001',
    situacaoAutorizacao: 'AUTORIZADA',
    dataAutorizacao: '2024-01-15',
    motivoCancelamento: '',
    numeroGuiaAutorizacao: 'AUTH20240115001',
    dadosBeneficiario: {
      numeroCarteira: '1234567890',
      nomeBeneficiario: 'João Silva'
    }
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissSituacaoAutorizacao_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:situacaoAutorizacaoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLICITA_STATUS_AUTORIZACAO</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:situacaoAutorizacao>
          <ans:numeroGuiaOperadora>OP20240115001</ans:numeroGuiaOperadora>
          <ans:numeroGuiaPrincipal>GP20240115001</ans:numeroGuiaPrincipal>
          <ans:situacaoAutorizacao>AUTORIZADA</ans:situacaoAutorizacao>
          <ans:dataAutorizacao>2024-01-15</ans:dataAutorizacao>
          <ans:numeroGuiaAutorizacao>AUTH20240115001</ans:numeroGuiaAutorizacao>
        </ans:situacaoAutorizacao>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:situacaoAutorizacaoWS>
    </ans:tissSituacaoAutorizacao_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
