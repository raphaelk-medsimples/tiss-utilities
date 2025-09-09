import { DadosPrestador } from "./DadosPrestador";
import { Protocolos } from "./Protocolos";

/** demonstrativoAnalise */
export interface DemonstrativoAnalise {
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_data|date */
    dataSolicitacao?: string;
    /** protocolos */
    protocolos?: Protocolos;
}
