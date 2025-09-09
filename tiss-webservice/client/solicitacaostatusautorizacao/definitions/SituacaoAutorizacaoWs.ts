import { Cabecalho } from "./Cabecalho";
import { SituacaoAutorizacao } from "./SituacaoAutorizacao";
import { Signature } from "./Signature";

/** situacaoAutorizacaoWS */
export interface SituacaoAutorizacaoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** situacaoAutorizacao */
    situacaoAutorizacao?: SituacaoAutorizacao;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
