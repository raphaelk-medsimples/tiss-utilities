import { Cabecalho } from "./Cabecalho";
import { RecebimentoLote } from "./RecebimentoLote";
import { AssinaturaDigitalGuia } from "./AssinaturaDigitalGuia";

/** protocoloRecebimentoWS */
export interface ProtocoloRecebimentoWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** recebimentoLote */
    recebimentoLote?: RecebimentoLote;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: AssinaturaDigitalGuia;
}
