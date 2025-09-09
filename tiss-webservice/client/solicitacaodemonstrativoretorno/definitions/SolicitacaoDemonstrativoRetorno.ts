import { DemonstrativoPagamento } from "./DemonstrativoPagamento";
import { DemonstrativoAnalise } from "./DemonstrativoAnalise";

/**
 * solicitacaoDemonstrativoRetorno
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoDemonstrativoRetorno {
    /** demonstrativoPagamento */
    demonstrativoPagamento?: DemonstrativoPagamento;
    /** demonstrativoAnalise */
    demonstrativoAnalise?: DemonstrativoAnalise;
}
