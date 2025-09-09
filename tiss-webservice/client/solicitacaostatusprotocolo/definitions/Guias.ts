import { GuiasMedicas } from "./GuiasMedicas";
import { GuiasOdonto } from "./GuiasOdonto";

/** guiasTISS */
export interface Guias {
    /** guiasMedicas[] */
    guiasMedicas?: Array<GuiasMedicas>;
    /** guiasOdonto[] */
    guiasOdonto?: Array<GuiasOdonto>;
}
