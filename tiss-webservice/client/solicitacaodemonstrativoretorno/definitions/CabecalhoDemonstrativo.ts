
/**
 * cabecalhoDemonstrativo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface CabecalhoDemonstrativo {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroDemonstrativo?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeOperadora?: string;
    /** st_CNPJ|string|pattern */
    numeroCNPJ?: string;
    /** st_data|date */
    dataEmissao?: string;
}
