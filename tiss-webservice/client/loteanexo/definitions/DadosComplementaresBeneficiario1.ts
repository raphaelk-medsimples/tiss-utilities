
/**
 * dadosComplementaresBeneficiario
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosComplementaresBeneficiario1 {
    /** st_decimal5-2|decimal|totalDigits,fractionDigits */
    peso?: string;
    /** st_decimal5-2|decimal|totalDigits,fractionDigits */
    altura?: string;
    /** st_decimal4-2|decimal|totalDigits,fractionDigits */
    superficieCorporal?: string;
    /** st_numerico3|integer|totalDigits */
    idade?: string;
    /** dm_sexo|string|maxLength,1,3 */
    sexo?: string;
}
