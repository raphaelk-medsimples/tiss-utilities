import { GuiaSpSadt } from "./GuiaSpSadt";
import { GuiaResumoInternacao } from "./GuiaResumoInternacao";
import { GuiaHonorarios } from "./GuiaHonorarios";
import { GuiaConsulta } from "./GuiaConsulta";
import { GuiaOdonto } from "./GuiaOdonto";

/** guiasTISS */
export interface Guias {
    /** guiaSP-SADT[] */
    "guiaSP-SADT"?: Array<GuiaSpSadt>;
    /** guiaResumoInternacao[] */
    guiaResumoInternacao?: Array<GuiaResumoInternacao>;
    /** guiaHonorarios[] */
    guiaHonorarios?: Array<GuiaHonorarios>;
    /** guiaConsulta[] */
    guiaConsulta?: Array<GuiaConsulta>;
    /** guiaOdonto[] */
    guiaOdonto?: Array<GuiaOdonto>;
}
