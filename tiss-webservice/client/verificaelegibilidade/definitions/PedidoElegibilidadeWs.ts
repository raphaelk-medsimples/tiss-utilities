import { Cabecalho } from "./Cabecalho";
import { PedidoElegibilidade } from "./PedidoElegibilidade";
import { Signature } from "./Signature";

/** pedidoElegibilidadeWS */
export interface PedidoElegibilidadeWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** pedidoElegibilidade */
    pedidoElegibilidade?: PedidoElegibilidade;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
