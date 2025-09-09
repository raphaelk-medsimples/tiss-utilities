import { MensagemErro } from "./MensagemErro";
import { AutorizacaoInternacao } from "./AutorizacaoInternacao";
import { AutorizacaoDosServicos } from "./AutorizacaoDosServicos";
import { AutorizacaoProrrogacao } from "./AutorizacaoProrrogacao";
import { AutorizacaoServicoOdonto } from "./AutorizacaoServicoOdonto";

/**
 * situacaoAutorizacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SituacaoAutorizacao {
    /** mensagemErro */
    mensagemErro?: MensagemErro;
    /** autorizacaoInternacao */
    autorizacaoInternacao?: AutorizacaoInternacao;
    /** autorizacaoServico */
    autorizacaoServico?: AutorizacaoDosServicos;
    /** autorizacaoProrrogacao */
    autorizacaoProrrogacao?: AutorizacaoProrrogacao;
    /** autorizacaoServicoOdonto */
    autorizacaoServicoOdonto?: AutorizacaoServicoOdonto;
}
