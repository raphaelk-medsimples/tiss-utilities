import { Procedimento } from "./Procedimento";
import { GlosasProcedimento } from "./GlosasProcedimento";

/** procedimentoRealizado */
export interface ProcedimentoRealizado1 {
    /** st_numerico4|integer|totalDigits */
    sequencialItem?: string;
    /** st_data|date */
    dataExecucao?: string;
    /** st_hora|time */
    horaInicial?: string;
    /** st_hora|time */
    horaFinal?: string;
    /** procedimento */
    procedimento?: Procedimento;
    /** dm_unidadeMedida|string|length,001,002,003,004,005,006,007,008,009,010,011,012,013,014,015,016,017,018,019,020,021,022,023,024,025,026,027,028,029,030,031,032,033,034,035,036,037,038,039,040,041,042,043,044,045,046,047,048,049,050,051,052,053,054,055,056,057,058,059,060,061 */
    unidadeMedida?: string;
    /** st_decimal9-4|decimal|totalDigits,fractionDigits */
    quantidadeExecutada?: string;
    /** dm_viaDeAcesso|string|maxLength,1,2,3 */
    viaAcesso?: string;
    /** dm_tecnicaUtilizada|string|1,2,3 */
    tecnicaUtilizada?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorUnitario?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotal?: string;
    /** dm_outrasDespesas|string|01,02,03,05,07,08 */
    codigoDespesa?: string;
    /** st_decimal3-2|decimal|totalDigits,fractionDigits */
    fatorReducaoAcrescimo?: string;
    /** glosasProcedimento */
    glosasProcedimento?: GlosasProcedimento;
}
