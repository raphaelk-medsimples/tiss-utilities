import { MensagemErro } from "./MensagemErro";

/** glosasProcedimento */
export interface GlosasProcedimento1 {
    /** motivoGlosa[] */
    motivoGlosa?: Array<MensagemErro>;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorGlosaProcedimento?: string;
}
