
/**
 * identificacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface Identificacao {
    /** dm_tabela|string|18,19,20,22,90,98,00 */
    codigoTabela?: string;
    /** st_texto10|string|minLength,maxLength */
    codigoProcedimento?: string;
    /** st_texto150|string|minLength,maxLength */
    descricaoProcedimento?: string;
}
