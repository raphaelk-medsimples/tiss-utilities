
/** identificacaoPrestador */
export interface IdentificacaoPrestador {
    /** st_CNPJ|string|pattern */
    CNPJ?: string;
    /** st_CPF|string|pattern */
    CPF?: string;
    /** st_texto14|string|minLength,maxLength */
    codigoPrestadorNaOperadora?: string;
}
