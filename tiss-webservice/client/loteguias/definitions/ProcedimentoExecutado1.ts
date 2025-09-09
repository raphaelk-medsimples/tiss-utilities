import { Procedimento } from "./Procedimento";
import { IdentEquipe } from "./IdentEquipe";

/**
 * procedimentoExecutado
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ProcedimentoExecutado1 {
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
    /** identEquipe[] */
    identEquipe?: Array<IdentEquipe>;
}
