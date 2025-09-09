import { MensagemErro } from "./MensagemErro";
import { DetalhesGuia } from "./DetalhesGuia";

/** relacaoGuias */
export interface RelacaoGuias {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_texto20|string|minLength,maxLength */
    senha?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroCarteira?: string;
    /** st_data|date */
    dataInicioFat?: string;
    /** st_hora|time */
    horaInicioFat?: string;
    /** st_data|date */
    dataFimFat?: string;
    /** st_hora|time */
    horaFimFat?: string;
    /** motivoGlosaGuia[] */
    motivoGlosaGuia?: Array<MensagemErro>;
    /** dm_statusProtocolo|string|1,2,3,4,5,6,7,8,9 */
    situacaoGuia?: string;
    /** detalhesGuia[] */
    detalhesGuia?: Array<DetalhesGuia>;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorInformadoGuia?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorProcessadoGuia?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorLiberadoGuia?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorGlosaGuia?: string;
}
