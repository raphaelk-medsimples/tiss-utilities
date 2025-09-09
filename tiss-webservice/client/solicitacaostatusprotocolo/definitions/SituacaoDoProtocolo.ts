import { DadosPrestador } from "./DadosPrestador";
import { Lote } from "./Lote";

/**
 * situacaoDoProtocolo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SituacaoDoProtocolo {
    /** st_registroANS|string|maxLength,pattern */
    identificacaoOperadora?: string;
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** lote */
    lote?: Lote;
}
