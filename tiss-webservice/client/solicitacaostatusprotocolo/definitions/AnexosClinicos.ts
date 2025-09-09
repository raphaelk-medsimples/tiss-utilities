import { AnexoOpme } from "./AnexoOpme";
import { AnexoQuimio } from "./AnexoQuimio";
import { AnexoRadio } from "./AnexoRadio";

/** anexosClinicos */
export interface AnexosClinicos {
    /** anexoOPME */
    anexoOPME?: AnexoOpme;
    /** anexoQuimio */
    anexoQuimio?: AnexoQuimio;
    /** anexoRadio */
    anexoRadio?: AnexoRadio;
}
