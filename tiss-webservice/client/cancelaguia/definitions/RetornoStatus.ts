import { LoteCancelado } from "./LoteCancelado";
import { GuiasCanceladas } from "./GuiasCanceladas";

/** retornoStatus */
export interface RetornoStatus {
    /** loteCancelado */
    loteCancelado?: LoteCancelado;
    /** guiasCanceladas */
    guiasCanceladas?: GuiasCanceladas;
}
