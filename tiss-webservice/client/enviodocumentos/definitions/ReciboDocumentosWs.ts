import { Cabecalho } from "./Cabecalho";
import { RecebimentoDocumento } from "./RecebimentoDocumento";
import { Signature } from "./Signature";

/** reciboDocumentosWS */
export interface ReciboDocumentosWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** recebimentoDocumento */
    recebimentoDocumento?: RecebimentoDocumento;
    /** string */
    hash?: string;
    /** Signatures */
    Signatures?: Signature;
}
