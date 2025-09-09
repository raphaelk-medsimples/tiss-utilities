import { GlosaProtocolo } from "./GlosaProtocolo";
import { DadosGuiasProtocolo } from "./DadosGuiasProtocolo";

/**
 * detalheProtocolo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DetalheProtocolo {
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalProtocolo?: string;
    /** glosaProtocolo */
    glosaProtocolo?: GlosaProtocolo;
    /** dadosGuiasProtocolo */
    dadosGuiasProtocolo?: DadosGuiasProtocolo;
}
