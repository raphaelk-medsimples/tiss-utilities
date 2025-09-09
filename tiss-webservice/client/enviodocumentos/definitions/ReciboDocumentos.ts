
/**
 * reciboDocumentos
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ReciboDocumentos {
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroDocumento?: string;
    /** st_texto20|string|minLength,maxLength */
    protocoloDoc?: string;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
