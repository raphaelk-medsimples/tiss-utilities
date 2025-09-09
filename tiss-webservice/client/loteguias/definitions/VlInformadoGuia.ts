
/**
 * vlInformadoGuia
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface VlInformadoGuia {
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorProcessado?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorGlosa?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorLiberado?: string;
}
