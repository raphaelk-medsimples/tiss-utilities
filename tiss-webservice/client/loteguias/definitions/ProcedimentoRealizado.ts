import { Procedimento } from "./Procedimento";
import { Profissionais } from "./Profissionais";

/**
 * procedimentoRealizado
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ProcedimentoRealizado {
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
    /** st_numerico3|integer|totalDigits */
    quantidadeExecutada?: string;
    /** dm_viaDeAcesso|string|maxLength,1,2,3 */
    viaAcesso?: string;
    /** dm_tecnicaUtilizada|string|1,2,3 */
    tecnicaUtilizada?: string;
    /** st_decimal3-2|decimal|totalDigits,fractionDigits */
    reducaoAcrescimo?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorUnitario?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotal?: string;
    /** profissionais[] */
    profissionais?: Array<Profissionais>;
}
