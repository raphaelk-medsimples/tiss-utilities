import { Cabecalho } from "./Cabecalho";
import { EnvioDOcumento } from "./EnvioDOcumento";
import { Signature } from "./Signature";

/** envioDocumentoWS */
export interface EnvioDocumentoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** envioDOcumento */
    envioDOcumento?: EnvioDOcumento;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
