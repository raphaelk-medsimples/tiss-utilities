
/**
 * cabecalhoAnexo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface CabecalhoAnexo {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaAnexo?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaReferenciada?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_data|date */
    dataSolicitacao?: string;
    /** st_texto20|string|minLength,maxLength */
    senha?: string;
    /** st_data|date */
    dataAutorizacao?: string;
}
