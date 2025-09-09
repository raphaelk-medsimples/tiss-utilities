import { Procedimento } from "./Procedimento";

/** procedimentosSolicitados */
export interface ProcedimentosSolicitados {
    /** procedimento */
    procedimento?: Procedimento;
    /** st_numerico3|integer|totalDigits */
    quantidadeSolicitada?: string;
}
