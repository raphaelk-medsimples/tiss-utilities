import { Procedimento } from "./Procedimento";

/** procedimentosAdicionais */
export interface ProcedimentosAdicionais {
    /** procedimento */
    procedimento?: Procedimento;
    /** st_numerico3|integer|totalDigits */
    quantidadeSolicitada?: string;
}
