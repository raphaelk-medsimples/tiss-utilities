import { Procedimento } from "./Procedimento";
import { DenteRegiao } from "./DenteRegiao";
import { GlosasProcedimento1 } from "./GlosasProcedimento1";

/** procedimentoRealizado */
export interface ProcedimentoRealizado1 {
    /** st_numerico4|integer|totalDigits */
    sequencialItem?: string;
    /** procedimento */
    procedimento?: Procedimento;
    /** denteRegiao */
    denteRegiao?: DenteRegiao;
    /** dm_face|string|pattern */
    denteFace?: string;
    /** st_numerico2|integer|totalDigits */
    qtdProc?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    qtdUS?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorProc?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorFranquia?: string;
    /** dm_simNao|string|S,N */
    autorizado?: string;
    /** st_data|date */
    dataRealizacao?: string;
    /** glosasProcedimento */
    glosasProcedimento?: GlosasProcedimento1;
}
