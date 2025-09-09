import { DadosPagamento1 } from "./DadosPagamento1";
import { Protocolos1 } from "./Protocolos1";
import { TotaisPorData } from "./TotaisPorData";
import { DebCredPorDataPagamento } from "./DebCredPorDataPagamento";
import { TotalLiquidoPorData } from "./TotalLiquidoPorData";

/** dadosPagamentoPorData */
export interface DadosPagamentoPorData {
    /** dadosPagamento */
    dadosPagamento?: DadosPagamento1;
    /** protocolos[] */
    protocolos?: Array<Protocolos1>;
    /** totaisPorData */
    totaisPorData?: TotaisPorData;
    /** debCredPorDataPagamento */
    debCredPorDataPagamento?: DebCredPorDataPagamento;
    /** totalLiquidoPorData */
    totalLiquidoPorData?: TotalLiquidoPorData;
}
