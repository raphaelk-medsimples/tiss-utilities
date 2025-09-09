import { AnexoSituacaoInicial } from "./AnexoSituacaoInicial";
import { AnexoSolicitacaoRadio } from "./AnexoSolicitacaoRadio";
import { AnexoSolicitacaoQuimio } from "./AnexoSolicitacaoQuimio";
import { AnexoSolicitacaoOpme } from "./AnexoSolicitacaoOpme";

/** AnexosGuiasTISS */
export interface AnexosGuias {
    /** anexoSituacaoInicial[] */
    anexoSituacaoInicial?: Array<AnexoSituacaoInicial>;
    /** anexoSolicitacaoRadio */
    anexoSolicitacaoRadio?: AnexoSolicitacaoRadio;
    /** anexoSolicitacaoQuimio */
    anexoSolicitacaoQuimio?: AnexoSolicitacaoQuimio;
    /** anexoSolicitacaoOPME */
    anexoSolicitacaoOPME?: AnexoSolicitacaoOpme;
}
