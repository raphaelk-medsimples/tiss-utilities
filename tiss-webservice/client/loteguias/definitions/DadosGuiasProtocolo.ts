import { DadosGuias } from "./DadosGuias";
import { DadosGuiasOdonto } from "./DadosGuiasOdonto";

/** dadosGuiasProtocolo */
export interface DadosGuiasProtocolo {
    /** dadosGuias[] */
    dadosGuias?: Array<DadosGuias>;
    /** dadosGuiasOdonto[] */
    dadosGuiasOdonto?: Array<DadosGuiasOdonto>;
}
