
/**
 * contratadoSolicitante
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ContratadoSolicitante {
    /** st_texto14|string|minLength,maxLength */
    codigoPrestadorNaOperadora?: string;
    /** st_CPF|string|pattern */
    cpfContratado?: string;
    /** st_CNPJ|string|pattern */
    cnpjContratado?: string;
}
