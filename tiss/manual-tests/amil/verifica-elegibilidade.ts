import { TissGateway } from '../../tiss-service.js';

const ws = new TissGateway({
  VERIFICA_ELEGIBILIDADE: 'https://api.servicos.grupoamil.com.br/api-tiss-verifica-elegibilidade/v4.01.00',
  CANCELA_GUIA: 'https://api.servicos.grupoamil.com.br/api-tiss-cancela-guia/v4.01.00',
  COMUNICACAO_BENEFICIARIO: 'https://api.servicos.grupoamil.com.br/api-tiss-comunicacao-beneficiario/v4.01.00',
  ENVIO_DOCUMENTO: 'https://api.servicos.grupoamil.com.br/api-tiss-envio-documento/v4.01.00',
  ENVIO_ANEXO: 'https://api.servicos.grupoamil.com.br/api-tiss-lote-anexo/v4.01.00',
  ENVIO_LOTE_GUIAS: 'https://api.servicos.grupoamil.com.br/api-tiss-lote-guias/v4.01.00',
  RECURSO_GLOSA: 'https://api.servicos.grupoamil.com.br/api-tiss-recurso-glosa/v4.01.00',
  SOLIC_DEMONSTRATIVO_RETORNO: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-demonstrativo-retorno/v4.01.00',
  SOLICITACAO_PROCEDIMENTOS: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-procedimento/v4.01.00?wsdl',
  SOLICITA_STATUS_AUTORIZACAO: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-autorizacao/v4.01.00?wsdl',
  SOLIC_STATUS_PROTOCOLO: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-protocolo/v4.01.00',
  SOLIC_STATUS_RECURSO_GLOSA: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-recurso-glosa/v4.01.00',
});

const res = await ws.solicitaStatusAutorizacao({
  solicitacaoStatusAutorizacao: {
    identificacaoSolicitacao: {
      registroANS: "326305",
      numeroGuiaPrestador: "1757331001511",
    },
    dadosBeneficiario: {
      numeroCarteira: "088226501",
      atendimentoRN: "N",
    },
  }
}, {
  codigoPrestador: "70434816",
  senhaPrestador: "Okdjdk22--",
  versaoTISS: "4.01.00",
  registroANS: "326305",
}).catch(console.error);

console.log(res);

https://api.servicos.grupoamil.com.br/api-tiss-verifica-elegibilidade/v4.01.00

<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissVerificaElegibilidade_Operation>
      <ans:pedidoElegibilidadeWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>VERIFICA_ELEGIBILIDADE</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
          <ans:origem>
            <ans:codigoOperadora>12345</ans:codigoOperadora>
            <ans:codigoRegistro>REG001</ans:codigoRegistro>
          </ans:origem>
          <ans:destino>
            <ans:codigoOperadora>67890</ans:codigoOperadora>
            <ans:codigoRegistro>REG002</ans:codigoRegistro>
          </ans:destino>
          <ans:Padrao>4.00.00</ans:Padrao>
          <ans:loginSenhaPrestador>
            <ans:loginPrestador>user123</ans:loginPrestador>
            <ans:senhaPrestador>pass123</ans:senhaPrestador>
          </ans:loginSenhaPrestador>
        </ans:cabecalho>
        <ans:pedidoElegibilidade>
          <ans:dadosPrestador>
            <ans:codigoPrestador>PREST001</ans:codigoPrestador>
            <ans:codigoCNES>1234567</ans:codigoCNES>
          </ans:dadosPrestador>
          <ans:numeroCarteira>1234567890</ans:numeroCarteira>
          <ans:tipoIdent>01</ans:tipoIdent>
          <ans:identificadorBeneficiario>MTIzNDU2Nzg5MA==</ans:identificadorBeneficiario>
          <ans:validadeCarteira>2024-12-31</ans:validadeCarteira>
          <ans:codValidacao>VAL123</ans:codValidacao>
        </ans:pedidoElegibilidade>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:pedidoElegibilidadeWS>
    </ans:tissVerificaElegibilidade_Operation>
  </soap:Body>
</soap:Envelope>