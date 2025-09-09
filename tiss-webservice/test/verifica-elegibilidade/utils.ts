import type { PedidoElegibilidadeWs } from '../../client/verificaelegibilidade/definitions/PedidoElegibilidadeWs';
import type { RespostaElegibilidadeWs } from '../../client/verificaelegibilidade/definitions/RespostaElegibilidadeWs';

export const mockPayload: PedidoElegibilidadeWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
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
  pedidoElegibilidade: {
    dadosPrestador: {
      codigoPrestador: 'PREST001',
      codigoCNES: '1234567'
    },
    numeroCarteira: '1234567890',
    tipoIdent: '01',
    identificadorBeneficiario: 'MTIzNDU2Nzg5MA==',
    validadeCarteira: '2024-12-31',
    codValidacao: 'VAL123'
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse: RespostaElegibilidadeWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  respostaElegibilidade: {
    dadosBeneficiario: {
      numeroCarteira: '1234567890',
      nomeBeneficiario: 'João Silva',
      validadeCarteira: '2024-12-31'
    },
    infoSaude: {
      statusElegibilidade: '1'
    },
    dadosPlano: {
      numeroRegistroPlano: 'PLAN123456',
      nomeReduzidoPlano: 'PLANO BASIC',
      tipoProduto: '01'
    }
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissRespostaElegibilidade_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:respostaElegibilidadeWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>VERIFICA_ELEGIBILIDADE</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:respostaElegibilidade>
          <ans:dadosBeneficiario>
            <ans:numeroCarteira>1234567890</ans:numeroCarteira>
            <ans:nomeBeneficiario>João Silva</ans:nomeBeneficiario>
            <ans:validadeCarteira>2024-12-31</ans:validadeCarteira>
          </ans:dadosBeneficiario>
          <ans:infoSaude>
            <ans:statusElegibilidade>1</ans:statusElegibilidade>
          </ans:infoSaude>
          <ans:dadosPlano>
            <ans:numeroRegistroPlano>PLAN123456</ans:numeroRegistroPlano>
            <ans:nomeReduzidoPlano>PLANO BASIC</ans:nomeReduzidoPlano>
            <ans:tipoProduto>01</ans:tipoProduto>
          </ans:dadosPlano>
        </ans:respostaElegibilidade>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:respostaElegibilidadeWS>
    </ans:tissRespostaElegibilidade_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
