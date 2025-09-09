import { Procedimento } from "./Procedimento";
import { RelacaoGlosa } from "./RelacaoGlosa";

/** detalhesGuia */
export interface DetalhesGuia {
    /** st_numerico4|integer|totalDigits */
    sequencialItem?: string;
    /** st_data|date */
    dataRealizacao?: string;
    /** procedimento */
    procedimento?: Procedimento;
    /** dm_grauPart|string|maxLength,00,01,02,03,04,05,06,07,08,09,10,11,12,13 */
    grauParticipacao?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorInformado?: string;
    /** st_decimal9-4|decimal|totalDigits,fractionDigits */
    qtdExecutada?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorProcessado?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorLiberado?: string;
    /** relacaoGlosa[] */
    relacaoGlosa?: Array<RelacaoGlosa>;
}
