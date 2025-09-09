import { Cabecalho } from "./Cabecalho";
import { AutorizacaoProcedimento } from "./AutorizacaoProcedimento";
import { Signature } from "./Signature";

/** autorizacaoProcedimentoWS */
export interface AutorizacaoProcedimentoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** autorizacaoProcedimento */
    autorizacaoProcedimento?: AutorizacaoProcedimento;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
