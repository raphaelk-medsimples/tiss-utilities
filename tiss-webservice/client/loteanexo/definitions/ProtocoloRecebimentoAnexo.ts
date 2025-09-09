import { DadosPrestador } from "./DadosPrestador";
import { AnexosClinicos } from "./AnexosClinicos";

/**
 * protocoloRecebimentoAnexo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ProtocoloRecebimentoAnexo {
    /** st_texto12|string|minLength,maxLength */
    nrProtocoloRecebimento?: string;
    /** st_data|date */
    dataEnvioAnexo?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_numerico3|integer|totalDigits */
    qtAnexosClinicos?: string;
    /** anexosClinicos */
    anexosClinicos?: AnexosClinicos;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
