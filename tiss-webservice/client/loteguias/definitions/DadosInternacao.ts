import { Declaracoes } from "./Declaracoes";

/**
 * dadosInternacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosInternacao {
    /** dm_caraterAtendimento|string|1,2 */
    caraterAtendimento?: string;
    /** dm_tipoFaturamento|string|1,2,3,4 */
    tipoFaturamento?: string;
    /** st_data|date */
    dataInicioFaturamento?: string;
    /** st_hora|time */
    horaInicioFaturamento?: string;
    /** st_data|date */
    dataFinalFaturamento?: string;
    /** st_hora|time */
    horaFinalFaturamento?: string;
    /** dm_tipoInternacao|string|1,2,3,4,5 */
    tipoInternacao?: string;
    /** dm_regimeInternacao|string|1,2,3 */
    regimeInternacao?: string;
    /** declaracoes[] */
    declaracoes?: Array<Declaracoes>;
}
