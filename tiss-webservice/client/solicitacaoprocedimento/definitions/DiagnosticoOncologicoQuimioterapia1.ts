import { DiagQuimio } from "./DiagQuimio";

/** diagnosticoOncologicoQuimioterapia */
export interface DiagnosticoOncologicoQuimioterapia1 {
    /** diagQuimio */
    diagQuimio?: DiagQuimio;
    /** dm_tumor|string|1,2,3,4,5,6,7,8,9 */
    tumor?: string;
    /** dm_nodulo|string|1,2,3,4,5,8,9 */
    nodulo?: string;
    /** dm_metastase|string|1,2,3,8,9 */
    metastase?: string;
    /** dm_tipoQuimioterapia|string|1,2,3,4 */
    tipoQuimioterapia?: string;
    /** st_texto1000|string|minLength,maxLength */
    planoTerapeutico?: string;
}
