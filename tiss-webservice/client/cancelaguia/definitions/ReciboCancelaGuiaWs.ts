import { Cabecalho } from "./Cabecalho";
import { ReciboCancelaGuia } from "./ReciboCancelaGuia";
import { Signature } from "./Signature";

/** reciboCancelaGuiaWS */
export interface ReciboCancelaGuiaWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** reciboCancelaGuia */
    reciboCancelaGuia?: ReciboCancelaGuia;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
