import { TotaisBrutosDemonstrativo } from "./TotaisBrutosDemonstrativo";
import { DebitosCreditos } from "./DebitosCreditos";
import { TotaisLiquidosDemonstrativo } from "./TotaisLiquidosDemonstrativo";

/** totaisDemonstrativo */
export interface TotaisDemonstrativo {
    /** totaisBrutosDemonstrativo */
    totaisBrutosDemonstrativo?: TotaisBrutosDemonstrativo;
    /** debitosCreditosDemonstrativo[] */
    debitosCreditosDemonstrativo?: Array<DebitosCreditos>;
    /** totaisLiquidosDemonstrativo */
    totaisLiquidosDemonstrativo?: TotaisLiquidosDemonstrativo;
}
