
/**
 * dadosComplementaresBeneficiario
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosComplementaresBeneficiario {
    /** st_numerico3|integer|totalDigits */
    idade?: string;
    /** dm_sexo|string|maxLength,1,3 */
    sexo?: string;
}
