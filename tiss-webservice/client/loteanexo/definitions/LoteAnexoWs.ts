import { Cabecalho } from "./Cabecalho";
import { LoteAnexo } from "./LoteAnexo";
import { Signature } from "./Signature";

/** loteAnexoWS */
export interface LoteAnexoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** loteAnexo */
    loteAnexo?: LoteAnexo;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
