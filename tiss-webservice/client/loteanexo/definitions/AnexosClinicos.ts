import { AnexoOpme } from "./AnexoOpme";
import { AnexoQuimio } from "./AnexoQuimio";
import { AnexoRadio } from "./AnexoRadio";
import { AnexoSituacaoInicial1 } from "./AnexoSituacaoInicial1";

/** anexosClinicos */
export interface AnexosClinicos {
    /** anexoOPME */
    anexoOPME?: AnexoOpme;
    /** anexoQuimio */
    anexoQuimio?: AnexoQuimio;
    /** anexoRadio */
    anexoRadio?: AnexoRadio;
    /** anexoSituacaoInicial[] */
    anexoSituacaoInicial?: Array<AnexoSituacaoInicial1>;
}
