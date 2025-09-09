import { Dentes } from "./Dentes";

/**
 * situacaoClinica
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SituacaoClinica {
    /** dentes[] */
    dentes?: Array<Dentes>;
}
