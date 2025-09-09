import { DadosPrestador } from "./DadosPrestador";
import { RetornoStatus } from "./RetornoStatus";

/**
 * reciboCancelaGuia
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ReciboCancelaGuia1 {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** retornoStatus */
    retornoStatus?: RetornoStatus;
}
