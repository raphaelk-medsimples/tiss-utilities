
/**
 * debitosCreditos
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DebitosCreditos {
    /** dm_debitoCreditoIndicador|string|1,2 */
    indicador?: string;
    /** dm_debitoCreditoTipo|string|maxLength,01,02,03,04,05,06,07,08,09 */
    tipoDebitoCredito?: string;
    /** st_texto40|string|minLength,maxLength */
    descricaoDbCr?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorDbCr?: string;
}
