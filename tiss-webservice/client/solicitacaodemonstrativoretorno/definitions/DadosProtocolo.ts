import { MensagemErro } from "./MensagemErro";
import { RelacaoGuias } from "./RelacaoGuias";

/** dadosProtocolo */
export interface DadosProtocolo {
    /** st_texto12|string|minLength,maxLength */
    numeroLotePrestador?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** st_data|date */
    dataProtocolo?: string;
    /** GlosaProtocolo */
    GlosaProtocolo?: MensagemErro;
    /** dm_statusProtocolo|string|1,2,3,4,5,6,7,8,9 */
    situacaoProtocolo?: string;
    /** relacaoGuias[] */
    relacaoGuias?: Array<RelacaoGuias>;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorInformadoProtocolo?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorProcessadoProtocolo?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorLiberadoProtocolo?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorGlosaProtocolo?: string;
}
