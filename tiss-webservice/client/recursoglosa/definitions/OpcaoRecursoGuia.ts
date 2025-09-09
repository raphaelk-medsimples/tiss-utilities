import { RecursoGuiaCompleta } from "./RecursoGuiaCompleta";
import { ItensGuia } from "./ItensGuia";

/** opcaoRecursoGuia */
export interface OpcaoRecursoGuia {
    /** recursoGuiaCompleta[] */
    recursoGuiaCompleta?: Array<RecursoGuiaCompleta>;
    /** itensGuia[] */
    itensGuia?: Array<ItensGuia>;
}
