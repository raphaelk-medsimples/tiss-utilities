import { Cabecalho } from "./Cabecalho";
import { SituacaoProtocoloRecurso } from "./SituacaoProtocoloRecurso";
import { Signature } from "./Signature";

/** situacaoProtocoloRecursoWS */
export interface SituacaoProtocoloRecursoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** situacaoProtocoloRecurso */
    situacaoProtocoloRecurso?: SituacaoProtocoloRecurso;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
