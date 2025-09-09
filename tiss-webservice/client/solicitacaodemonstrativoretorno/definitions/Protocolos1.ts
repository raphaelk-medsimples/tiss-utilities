import { DadosPagamentoGuia } from "./DadosPagamentoGuia";
import { TotaisPorProtocolo } from "./TotaisPorProtocolo";

/** protocolos */
export interface Protocolos1 {
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** dadosPagamentoGuia[] */
    dadosPagamentoGuia?: Array<DadosPagamentoGuia>;
    /** totaisPorProtocolo */
    totaisPorProtocolo?: TotaisPorProtocolo;
}
