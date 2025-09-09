import { Procedimento } from "./Procedimento";
import { DenteRegiao1 } from "./DenteRegiao1";
import { MotivosNegativa4 } from "./MotivosNegativa4";

/** procedimentosAutorizados */
export interface ProcedimentosAutorizados {
    /** st_numerico4|integer|totalDigits */
    sequencialItem?: string;
    /** procSolic */
    procSolic?: Procedimento;
    /** denteRegiao */
    denteRegiao?: DenteRegiao1;
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
    /** dm_simNao|string|S,N */
    aut?: string;
    /** motivosNegativa */
    motivosNegativa?: MotivosNegativa4;
}
