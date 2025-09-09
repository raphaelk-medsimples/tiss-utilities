import { Cabecalho } from "./Cabecalho";
import { SituacaoProtocolo } from "./SituacaoProtocolo";
import { Signature } from "./Signature";

/** situacaoProtocoloWS */
export interface SituacaoProtocoloWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** situacaoProtocolo */
    situacaoProtocolo?: SituacaoProtocolo;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
