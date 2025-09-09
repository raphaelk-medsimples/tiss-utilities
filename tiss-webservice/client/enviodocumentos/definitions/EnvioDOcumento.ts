
/**
 * envioDOcumento
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface EnvioDOcumento {
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
    /** dm_tipoGuia|string|1,2,3 */
    naturezaGuia?: string;
    /** dm_formatoDocumento|string|01,02,03,04,05,06,07,08,09 */
    formatoDocumento?: string;
    /** st_numerico4|integer|totalDigits */
    seqReferenciaItem?: string;
    /** base64Binary */
    documento?: string;
    /** dm_tipoDocumento|string|01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17 */
    tipoDocumento?: string;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
