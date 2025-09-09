
/**
 * loginSenhaPrestador
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface LoginSenhaPrestador {
    /** st_texto20|string|minLength,maxLength */
    loginPrestador?: string;
    /** st_texto32|string|minLength,maxLength */
    senhaPrestador?: string;
}
