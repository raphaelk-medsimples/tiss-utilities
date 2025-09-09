import { Cabecalho } from "./Cabecalho";
import { DemonstrativoRetorno } from "./DemonstrativoRetorno";
import { Signature } from "./Signature";

/** demonstrativoRetornoWS */
export interface DemonstrativoRetornoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** demonstrativoRetorno */
    demonstrativoRetorno?: DemonstrativoRetorno;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
