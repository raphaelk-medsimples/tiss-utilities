import { DadosContratado } from "./DadosContratado";
import { RecursoProtocolo2 } from "./RecursoProtocolo2";
import { GuiasRecurso } from "./GuiasRecurso";

/**
 * protocoloRecebimento
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ProtocoloRecebimento {
    /** st_texto12|string|minLength,maxLength */
    nrProtocoloRecursoGlosa?: string;
    /** st_data|date */
    dataEnvioRecurso?: string;
    /** st_data|date */
    dataRecebimentoRecurso?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** dadosPrestador */
    dadosPrestador?: DadosContratado;
    /** st_texto12|string|minLength,maxLength */
    nrProtocoloRecursado?: string;
    /** recursoProtocolo */
    recursoProtocolo?: RecursoProtocolo2;
    /** st_numerico3|integer|totalDigits */
    qtGuiasRecurso?: string;
    /** guiasRecurso[] */
    guiasRecurso?: Array<GuiasRecurso>;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalRecursado?: string;
}
