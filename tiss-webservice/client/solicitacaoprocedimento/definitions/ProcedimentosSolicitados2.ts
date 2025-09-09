import { Procedimento } from "./Procedimento";
import { DenteRegiao } from "./DenteRegiao";

/** procedimentosSolicitados */
export interface ProcedimentosSolicitados2 {
    /** procSolic */
    procSolic?: Procedimento;
    /** denteRegiao */
    denteRegiao?: DenteRegiao;
    /** st_texto5|string|minLength,maxLength */
    denteFace?: string;
    /** st_numerico2|integer|totalDigits */
    qtdProc?: string;
    /** st_decimal7-2|decimal|totalDigits,fractionDigits */
    qtdUS?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorProc?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorFranquia?: string;
    /** dm_simNao|string|S,N */
    aut?: string;
    /** st_data|date */
    dataRealizacao?: string;
}
