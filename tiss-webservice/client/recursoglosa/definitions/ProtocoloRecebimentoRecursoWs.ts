import { Cabecalho } from "./Cabecalho";
import { RecebimentoRecurso } from "./RecebimentoRecurso";
import { Signature } from "./Signature";

/** protocoloRecebimentoRecursoWS */
export interface ProtocoloRecebimentoRecursoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** recebimentoRecurso */
    recebimentoRecurso?: RecebimentoRecurso;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
