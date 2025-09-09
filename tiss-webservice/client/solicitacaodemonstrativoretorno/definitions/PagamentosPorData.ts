import { DadosPagamento } from "./DadosPagamento";
import { DadosResumo } from "./DadosResumo";
import { TotaisBrutosPorData } from "./TotaisBrutosPorData";
import { DebitosCreditosPorData } from "./DebitosCreditosPorData";
import { TotaisLiquidosPorData } from "./TotaisLiquidosPorData";

/** pagamentosPorData */
export interface PagamentosPorData {
    /** dadosPagamento */
    dadosPagamento?: DadosPagamento;
    /** dadosResumo */
    dadosResumo?: DadosResumo;
    /** totaisBrutosPorData */
    totaisBrutosPorData?: TotaisBrutosPorData;
    /** debitosCreditosPorData */
    debitosCreditosPorData?: DebitosCreditosPorData;
    /** totaisLiquidosPorData */
    totaisLiquidosPorData?: TotaisLiquidosPorData;
}
