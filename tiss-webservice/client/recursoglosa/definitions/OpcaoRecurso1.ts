import { RecursoProtocolo1 } from "./RecursoProtocolo1";
import { RecursoGuia1 } from "./RecursoGuia1";

/** opcaoRecurso */
export interface OpcaoRecurso1 {
    /** recursoProtocolo */
    recursoProtocolo?: RecursoProtocolo1;
    /** recursoGuia[] */
    recursoGuia?: Array<RecursoGuia1>;
}
