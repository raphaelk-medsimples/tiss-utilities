
/**
 * dadosAtendimento
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosAtendimento {
    /** dm_tipoAtendimento|string|01,02,03,04,08,09,10,13,23 */
    tipoAtendimento?: string;
    /** dm_indicadorAcidente|string|0,1,2,9 */
    indicacaoAcidente?: string;
    /** dm_tipoConsulta|string|1,2,3,4 */
    tipoConsulta?: string;
    /** dm_motivoSaidaObito|string|41,42,43 */
    motivoEncerramento?: string;
    /** dm_regimeAtendimento|string|01,02,03,04,05 */
    regimeAtendimento?: string;
    /** dm_saudeOcupacional|string|01,02,03,04,05,06 */
    saudeOcupacional?: string;
}
