import { Despesa } from "./Despesa";

/**
 * outrasDespesas
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface OutrasDespesas {
    /** despesa[] */
    despesa?: Array<Despesa>;
}
