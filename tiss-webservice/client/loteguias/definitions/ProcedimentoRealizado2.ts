import { Procedimento } from "./Procedimento";
import { DenteRegiao1 } from "./DenteRegiao1";
import { GlosasProcedimento1 } from "./GlosasProcedimento1";

/** procedimentoRealizado */
export interface ProcedimentoRealizado2 {
    /** st_numerico4|integer|totalDigits */
    sequencialItem?: string;
    /** procedimento */
    procedimento?: Procedimento;
    /** denteRegiao */
    denteRegiao?: DenteRegiao1;
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
