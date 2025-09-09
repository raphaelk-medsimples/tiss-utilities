import { MensagemErro } from "./MensagemErro";
import { ProtocoloRecebimento } from "./ProtocoloRecebimento";

/**
 * recebimentoRecurso
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface RecebimentoRecurso {
    /** mensagemErro */
    mensagemErro?: MensagemErro;
    /** protocoloRecebimento */
    protocoloRecebimento?: ProtocoloRecebimento;
}
