import { Cabecalho } from "./Cabecalho";
import { SolicitacaoStatusProtocoloRecurso } from "./SolicitacaoStatusProtocoloRecurso";
import { Signature } from "./Signature";

/** solicitacaoStatusRecursoGlosaWS */
export interface SolicitacaoStatusRecursoGlosaWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** solicitacaoStatusProtocoloRecurso */
    solicitacaoStatusProtocoloRecurso?: SolicitacaoStatusProtocoloRecurso;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
