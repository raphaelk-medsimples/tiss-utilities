import { MensagemErro } from "./MensagemErro";
import { ProtocoloRecebimento } from "./ProtocoloRecebimento";

/**
 * recebimentoLote
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface RecebimentoLote {
    /** mensagemErro */
    mensagemErro?: MensagemErro;
    /** protocoloRecebimento */
    protocoloRecebimento?: ProtocoloRecebimento;
}
