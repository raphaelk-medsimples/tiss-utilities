import { MensagemErro } from "./MensagemErro";
import { SituacaoDoProtocolo } from "./SituacaoDoProtocolo";
import { SituacaoProtocoloAnexo } from "./SituacaoProtocoloAnexo";

/**
 * situacaoProtocolo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SituacaoProtocolo {
    /** mensagemErro */
    mensagemErro?: MensagemErro;
    /** situacaoDoProtocolo */
    situacaoDoProtocolo?: SituacaoDoProtocolo;
    /** situacaoProtocoloAnexo */
    situacaoProtocoloAnexo?: SituacaoProtocoloAnexo;
}
