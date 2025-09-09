import { Cabecalho } from "./Cabecalho";
import { LoteRecurso } from "./LoteRecurso";
import { Signature } from "./Signature";

/** loteRecursoGlosaWS */
export interface LoteRecursoGlosaWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** loteRecurso */
    loteRecurso?: LoteRecurso;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
