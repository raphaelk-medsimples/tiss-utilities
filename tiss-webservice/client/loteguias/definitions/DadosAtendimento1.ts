import { Procedimento1 } from "./Procedimento1";

/**
 * dadosAtendimento
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosAtendimento1 {
    /** dm_cobEsp|string|maxLength,01,02,03 */
    coberturaEspecial?: string;
    /** dm_regimeAtendimento|string|01,02,03,04,05 */
    regimeAtendimento?: string;
    /** dm_saudeOcupacional|string|01,02,03,04,05,06 */
    saudeOcupacional?: string;
    /** st_data|date */
    dataAtendimento?: string;
    /** dm_tipoConsulta|string|1,2,3,4 */
    tipoConsulta?: string;
    /** procedimento */
    procedimento?: Procedimento1;
}
