import { RespostaGuia } from "./RespostaGuia";
import { RespostaGuiaItens } from "./RespostaGuiaItens";

/** recursoGuia */
export interface RecursoGuia {
    /** respostaGuia */
    respostaGuia?: RespostaGuia;
    /** respostaGuiaItens */
    respostaGuiaItens?: RespostaGuiaItens;
}
