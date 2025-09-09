
/**
 * servicosExecutados
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ServicosExecutados {
    /** st_data|date */
    dataExecucao?: string;
    /** st_hora|time */
    horaInicial?: string;
    /** st_hora|time */
    horaFinal?: string;
    /** dm_tabela|string|18,19,20,22,90,98,00 */
    codigoTabela?: string;
    /** st_texto10|string|minLength,maxLength */
    codigoProcedimento?: string;
    /** st_decimal9-4|decimal|totalDigits,fractionDigits */
    quantidadeExecutada?: string;
    /** dm_unidadeMedida|string|length,001,002,003,004,005,006,007,008,009,010,011,012,013,014,015,016,017,018,019,020,021,022,023,024,025,026,027,028,029,030,031,032,033,034,035,036,037,038,039,040,041,042,043,044,045,046,047,048,049,050,051,052,053,054,055,056,057,058,059,060,061 */
    unidadeMedida?: string;
    /** st_decimal3-2|decimal|totalDigits,fractionDigits */
    reducaoAcrescimo?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorUnitario?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotal?: string;
    /** st_texto150|string|minLength,maxLength */
    descricaoProcedimento?: string;
    /** st_texto15|string|minLength,maxLength */
    registroANVISA?: string;
    /** st_texto60|string|minLength,maxLength */
    codigoRefFabricante?: string;
    /** st_texto30|string|minLength,maxLength */
    autorizacaoFuncionamento?: string;
}
