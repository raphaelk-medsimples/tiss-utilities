import { Identificacao } from "./Identificacao";

/**
 * drogaSolicitada
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DrogaSolicitada {
    /** st_data|date */
    dataProvavel?: string;
    /** identificacao */
    identificacao?: Identificacao;
    /** st_decimal7-2|decimal|totalDigits,fractionDigits */
    qtDoses?: string;
    /** dm_unidadeMedida|string|length,001,002,003,004,005,006,007,008,009,010,011,012,013,014,015,016,017,018,019,020,021,022,023,024,025,026,027,028,029,030,031,032,033,034,035,036,037,038,039,040,041,042,043,044,045,046,047,048,049,050,051,052,053,054,055,056,057,058,059,060,061 */
    unidadeMedida?: string;
    /** dm_viaAdministracao|string|maxLength,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35 */
    viaAdministracao?: string;
    /** st_numerico2|integer|totalDigits */
    frequencia?: string;
}
