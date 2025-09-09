import { MensagemErro } from "./MensagemErro";
import { ReciboComunicacao1 } from "./ReciboComunicacao1";

/**
 * reciboComunicacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ReciboComunicacao {
    /** mensagemErro */
    mensagemErro?: MensagemErro;
    /** reciboComunicacao */
    reciboComunicacao?: ReciboComunicacao1;
}
