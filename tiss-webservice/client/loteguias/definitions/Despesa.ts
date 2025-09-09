import { ServicosExecutados } from "./ServicosExecutados";

/** despesa */
export interface Despesa {
    /** st_numerico4|integer|totalDigits */
    sequencialItem?: string;
    /** dm_outrasDespesas|string|01,02,03,05,07,08 */
    codigoDespesa?: string;
    /** servicosExecutados */
    servicosExecutados?: ServicosExecutados;
    /** st_numerico4|integer|totalDigits */
    itemVinculado?: string;
}
