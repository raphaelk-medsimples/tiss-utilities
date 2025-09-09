import { Cabecalho } from "./Cabecalho";
import { ReciboComunicacao } from "./ReciboComunicacao";
import { Signature } from "./Signature";

/** reciboComunicacaoWS */
export interface ReciboComunicacaoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** reciboComunicacao */
    reciboComunicacao?: ReciboComunicacao;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
