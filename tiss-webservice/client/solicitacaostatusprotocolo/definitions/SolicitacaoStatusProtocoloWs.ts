import { Cabecalho } from "./Cabecalho";
import { SolicitacaoStatusProtocolo } from "./SolicitacaoStatusProtocolo";
import { Signature } from "./Signature";

/** solicitacaoStatusProtocoloWS */
export interface SolicitacaoStatusProtocoloWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** solicitacaoStatusProtocolo */
    solicitacaoStatusProtocolo?: SolicitacaoStatusProtocolo;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
