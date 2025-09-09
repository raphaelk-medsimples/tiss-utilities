
/**
 * identificacaoPrestador
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface IdentificacaoPrestador1 {
    /** st_CNPJ|string|pattern */
    CNPJ?: string;
    /** st_CPF|string|pattern */
    CPF?: string;
    /** st_texto14|string|minLength,maxLength */
    codigoPrestadorNaOperadora?: string;
}
