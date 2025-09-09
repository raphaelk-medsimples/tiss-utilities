import { Cabecalho } from "./Cabecalho";
import { LoteAnexo1 } from "./LoteAnexo1";
import { Signature } from "./Signature";

/** protocoloRecebimentoAnexoWS */
export interface ProtocoloRecebimentoAnexoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** loteAnexo */
    loteAnexo?: LoteAnexo1;
    /** string */
    hash?: string;
    /** Signatures */
    Signatures?: Signature;
}
