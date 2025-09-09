
/**
 * dadosPagamento
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosPagamento {
    /** st_data|date */
    dataPagamento?: string;
    /** dm_formaPagamento|string|1,2,3,4 */
    formaPagamento?: string;
    /** st_texto4|string|minLength,maxLength */
    banco?: string;
    /** st_texto7|string|minLength,maxLength */
    agencia?: string;
    /** st_texto20|string|minLength,maxLength */
    nrContaCheque?: string;
}
