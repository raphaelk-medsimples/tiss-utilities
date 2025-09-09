import { MensagemErro } from "./MensagemErro";
import { ReciboCancelaGuia1 } from "./ReciboCancelaGuia1";

/**
 * reciboCancelaGuia
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ReciboCancelaGuia {
    /** mensagemErro */
    mensagemErro?: MensagemErro;
    /** reciboCancelaGuia */
    reciboCancelaGuia?: ReciboCancelaGuia1;
}
