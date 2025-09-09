import { TipoCancelamentoLote } from "./TipoCancelamentoLote";
import { TipoCancelamentoGuia } from "./TipoCancelamentoGuia";

/** tipoCancelamento */
export interface TipoCancelamento {
    /** tipoCancelamentoLote */
    tipoCancelamentoLote?: TipoCancelamentoLote;
    /** tipoCancelamentoGuia[] */
    tipoCancelamentoGuia?: Array<TipoCancelamentoGuia>;
}
