import { DadosContratado } from "./DadosContratado";
import { OpcaoRecurso } from "./OpcaoRecurso";

/**
 * guiaRecursoGlosaOdonto
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface GuiaRecursoGlosaOdonto {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaRecGlosaPrestador?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeOperadora?: string;
    /** dm_objetoRecurso|string|1,2 */
    objetoRecurso?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaRecGlosaOperadora?: string;
    /** dadosContratado */
    dadosContratado?: DadosContratado;
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_numerico12|integer|totalDigits */
    numeroProtocolo?: string;
    /** opcaoRecurso */
    opcaoRecurso?: OpcaoRecurso;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalRecursado?: string;
    /** st_data|date */
    dataRecurso?: string;
}
