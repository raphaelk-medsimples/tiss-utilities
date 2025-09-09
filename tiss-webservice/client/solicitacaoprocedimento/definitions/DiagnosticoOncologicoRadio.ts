import { DiagQuimio } from "./DiagQuimio";

/** diagnosticoOncologicoRadio */
export interface DiagnosticoOncologicoRadio {
    /** diagRadio */
    diagRadio?: DiagQuimio;
    /** dm_diagnosticoImagem|string|1,2,3,4,5,6 */
    diagnosticoImagem?: string;
}
