import { Procedimento } from "./Procedimento";
import { DenteRegiao } from "./DenteRegiao";

/** procedimentosExecutados */
export interface ProcedimentosExecutados2 {
    /** st_numerico4|integer|totalDigits */
    sequencialItem?: string;
    /** procSolic */
    procSolic?: Procedimento;
    /** denteRegiao */
    denteRegiao?: DenteRegiao;
    /** st_texto5|string|minLength,maxLength */
    denteFace?: string;
    /** st_numerico2|integer|totalDigits */
    qtdProc?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    qtdUS?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorProc?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorFranquia?: string;
    /** st_logico|boolean */
    autorizado?: string;
    /** st_data|date */
    dataRealizacao?: string;
}
