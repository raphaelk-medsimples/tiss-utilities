
/**
 * cabecalhoSolicitacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface CabecalhoSolicitacao {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
}
