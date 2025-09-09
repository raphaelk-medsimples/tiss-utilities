
/** guiasDoLote */
export interface GuiasDoLote {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_texto20|string|minLength,maxLength */
    senha?: string;
    /** dm_tipoPagamento|string|1,2 */
    tipoPagamento?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorProcessadoGuia?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorLiberadoGuia?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorGlosaGuia?: string;
}
