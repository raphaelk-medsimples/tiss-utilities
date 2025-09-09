import { SolicitacaoSpSadt } from "./SolicitacaoSpSadt";
import { SolicitacaoInternacao } from "./SolicitacaoInternacao";
import { SolicitacaoProrrogacao } from "./SolicitacaoProrrogacao";
import { SolicitacaoOdontologia } from "./SolicitacaoOdontologia";

/**
 * solicitacaoProcedimento
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoProcedimento {
    /** solicitacaoSP-SADT */
    "solicitacaoSP-SADT"?: SolicitacaoSpSadt;
    /** solicitacaoInternacao */
    solicitacaoInternacao?: SolicitacaoInternacao;
    /** solicitacaoProrrogacao */
    solicitacaoProrrogacao?: SolicitacaoProrrogacao;
    /** solicitacaoOdontologia */
    solicitacaoOdontologia?: SolicitacaoOdontologia;
}
