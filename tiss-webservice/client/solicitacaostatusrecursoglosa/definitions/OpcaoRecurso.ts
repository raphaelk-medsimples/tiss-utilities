import { RecursoProtocolo } from "./RecursoProtocolo";
import { RecursoGuia } from "./RecursoGuia";

/** opcaoRecurso */
export interface OpcaoRecurso {
    /** recursoProtocolo */
    recursoProtocolo?: RecursoProtocolo;
    /** recursoGuia[] */
    recursoGuia?: Array<RecursoGuia>;
}
