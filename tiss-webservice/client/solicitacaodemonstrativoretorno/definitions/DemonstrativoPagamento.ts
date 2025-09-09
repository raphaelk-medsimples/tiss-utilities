import { DadosPrestador } from "./DadosPrestador";
import { Periodo } from "./Periodo";

/** demonstrativoPagamento */
export interface DemonstrativoPagamento {
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_data|date */
    dataSolicitacao?: string;
    /** dm_tipoDemonstrativoPagamento|string|1,3 */
    tipoDemonstrativo?: string;
    /** periodo */
    periodo?: Periodo;
}
