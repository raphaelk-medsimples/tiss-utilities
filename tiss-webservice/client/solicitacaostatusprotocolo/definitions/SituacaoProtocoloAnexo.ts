import { DadosPrestador } from "./DadosPrestador";
import { LoteAnexo } from "./LoteAnexo";

/**
 * situacaoProtocoloAnexo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SituacaoProtocoloAnexo {
    /** st_registroANS|string|maxLength,pattern */
    identificacaoOperadora?: string;
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** loteAnexo */
    loteAnexo?: LoteAnexo;
}
