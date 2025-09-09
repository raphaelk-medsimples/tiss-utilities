import { Cabecalho } from "./Cabecalho";
import { SolicitacaoProcedimento } from "./SolicitacaoProcedimento";
import { Signature } from "./Signature";

/** solicitacaoProcedimentoWS */
export interface SolicitacaoProcedimentoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** solicitacaoProcedimento */
    solicitacaoProcedimento?: SolicitacaoProcedimento;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
