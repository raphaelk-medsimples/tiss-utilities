import { Cabecalho } from "./Cabecalho";
import { SolicitacaoDemonstrativoRetorno } from "./SolicitacaoDemonstrativoRetorno";
import { Signature } from "./Signature";

/** solicitacaoDemonstrativoRetornoWS */
export interface SolicitacaoDemonstrativoRetornoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** solicitacaoDemonstrativoRetorno */
    solicitacaoDemonstrativoRetorno?: SolicitacaoDemonstrativoRetorno;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
