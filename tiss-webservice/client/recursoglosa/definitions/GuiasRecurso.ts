import { OpcaoRecursoGuia1 } from "./OpcaoRecursoGuia1";

/** guiasRecurso */
export interface GuiasRecurso {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOrigem?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_texto20|string|minLength,maxLength */
    senha?: string;
    /** opcaoRecursoGuia */
    opcaoRecursoGuia?: OpcaoRecursoGuia1;
}
