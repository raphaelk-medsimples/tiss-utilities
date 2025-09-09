import { DetalheLote } from "./DetalheLote";
import { MensagemErro } from "./MensagemErro";

/** lote */
export interface Lote {
    /** detalheLote */
    detalheLote?: DetalheLote;
    /** mensagemErro */
    mensagemErro?: MensagemErro;
}
