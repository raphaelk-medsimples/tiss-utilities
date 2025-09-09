import { Cabecalho } from "./Cabecalho";
import { SolicitacaoStatusAutorizacao } from "./SolicitacaoStatusAutorizacao";
import { Signature } from "./Signature";

/** solicitacaoStatusAutorizacaoWS */
export interface SolicitacaoStatusAutorizacaoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** solicitacaoStatusAutorizacao */
    solicitacaoStatusAutorizacao?: SolicitacaoStatusAutorizacao;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
