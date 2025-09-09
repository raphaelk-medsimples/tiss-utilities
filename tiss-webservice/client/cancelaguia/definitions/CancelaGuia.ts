import { DadosPrestador } from "./DadosPrestador";
import { TipoCancelamento } from "./TipoCancelamento";

/**
 * cancelaGuia
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface CancelaGuia {
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** tipoCancelamento */
    tipoCancelamento?: TipoCancelamento;
}
