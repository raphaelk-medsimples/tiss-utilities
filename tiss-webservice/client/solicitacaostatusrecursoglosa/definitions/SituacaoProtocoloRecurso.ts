import { ReciboGlosa } from "./ReciboGlosa";
import { ReciboGlosaOdonto } from "./ReciboGlosaOdonto";
import { ReciboGlosaStatus } from "./ReciboGlosaStatus";
import { MensagemErro } from "./MensagemErro";

/**
 * situacaoProtocoloRecurso
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SituacaoProtocoloRecurso {
    /** reciboGlosa */
    reciboGlosa?: ReciboGlosa;
    /** reciboGlosaOdonto */
    reciboGlosaOdonto?: ReciboGlosaOdonto;
    /** reciboGlosaStatus */
    reciboGlosaStatus?: ReciboGlosaStatus;
    /** mensagemErro */
    mensagemErro?: MensagemErro;
}
