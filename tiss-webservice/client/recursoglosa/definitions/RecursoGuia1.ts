import { OpcaoRecursoGuia } from "./OpcaoRecursoGuia";

/** recursoGuia */
export interface RecursoGuia1 {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOrigem?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_texto20|string|minLength,maxLength */
    senha?: string;
    /** opcaoRecursoGuia */
    opcaoRecursoGuia?: OpcaoRecursoGuia;
}
