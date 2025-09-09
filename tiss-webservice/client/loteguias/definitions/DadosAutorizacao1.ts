
/**
 * dadosAutorizacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosAutorizacao1 {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_data|date */
    dataAutorizacao?: string;
    /** st_texto20|string|minLength,maxLength */
    senha?: string;
    /** st_data|date */
    dataValidadeSenha?: string;
    /** dm_ausenciaCodValidacao|string|01,02,03,04,05,06,07 */
    ausenciaCodValidacao?: string;
    /** st_texto10|string|minLength,maxLength */
    codValidacao?: string;
}
