
/** contratadoExecutante */
export interface ContratadoExecutante {
    /** st_texto14|string|minLength,maxLength */
    codigoPrestadorNaOperadora?: string;
    /** st_CPF|string|pattern */
    cpfContratado?: string;
    /** st_CNPJ|string|pattern */
    cnpjContratado?: string;
    /** st_texto7|string|minLength,maxLength */
    CNES?: string;
}
