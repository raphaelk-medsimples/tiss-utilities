import { Cabecalho } from "./Cabecalho";
import { CancelaGuia } from "./CancelaGuia";
import { Signature } from "./Signature";

/** cancelaGuiaWS */
export interface CancelaGuiaWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** cancelaGuia */
    cancelaGuia?: CancelaGuia;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
