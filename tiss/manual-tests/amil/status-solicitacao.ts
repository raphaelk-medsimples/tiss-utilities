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
  SOLICITACAO_PROCEDIMENTOS: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-procedimento/v4.01.00',
  SOLICITA_STATUS_AUTORIZACAO: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-autorizacao/v4.01.00',
  SOLIC_STATUS_PROTOCOLO: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-protocolo/v4.01.00',
  SOLIC_STATUS_RECURSO_GLOSA: 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-status-recurso-glosa/v4.01.00',
});

const res = await ws.solicitaStatusAutorizacao({
  tipoTransacao: 'SOLICITA_STATUS_AUTORIZACAO',
  cabecalho: {
    origem: {
      identificacaoPrestador: {
        codigoPrestadorNaOperadora: "70434816",
      }
    },
    destino: {
      registroANS: "326305",
    },
    Padrao: "4.01.00",
    loginSenhaPrestador: {
      loginPrestador: "75029669",
      senhaPrestador: "Okdjdk2209-",
    }
  },
  solicitacaoStatusAutorizacao: {
    dadosBeneficiario: {
      numeroCarteira: "468448829",
      atendimentoRN: "N",
    },
    identificacaoSolicitacao: {
      registroANS: "326305",
      // numeroGuiaPrestador: "468448829",
      numeroGuiaPrestador: "087489560",
    }, 
    dadosContratado: {
      codigoPrestadorNaOperadora: "70434816",
    }
  }
}).catch(console.error);

console.log(res);

