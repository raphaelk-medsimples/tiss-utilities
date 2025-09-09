import { GuiasDoLote } from "./GuiasDoLote";

/**
 * relacaoProtocolos
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface RelacaoProtocolos {
    /** st_data|date */
    dataProtocolo?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorInformado?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorProcessado?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorLiberado?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorGlosa?: string;
    /** guiasDoLote[] */
    guiasDoLote?: Array<GuiasDoLote>;
}
