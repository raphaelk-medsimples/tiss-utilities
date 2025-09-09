import { OpcaoRecurso } from "./OpcaoRecurso";

/**
 * reciboGlosa
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ReciboGlosa {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaRecGlosaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaRecGlosaOperadora?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeOperadora?: string;
    /** dm_objetoRecurso|string|1,2 */
    objetoRecurso?: string;
    /** st_texto14|string|minLength,maxLength */
    codigoPrestador?: string;
    /** st_numerico12|integer|totalDigits */
    numeroLote?: string;
    /** st_numerico12|integer|totalDigits */
    numeroProtocolo?: string;
    /** opcaoRecurso */
    opcaoRecurso?: OpcaoRecurso;
    /** st_data|date */
    dataRecurso?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalRecursado?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalAcatado?: string;
}
