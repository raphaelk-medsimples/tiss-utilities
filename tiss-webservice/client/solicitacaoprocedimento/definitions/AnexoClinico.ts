import { SolicitacaoQuimioterapia } from "./SolicitacaoQuimioterapia";
import { SolicitacaoRadioterapia } from "./SolicitacaoRadioterapia";
import { SolicitacaoOpme } from "./SolicitacaoOpme";

/** anexoClinico */
export interface AnexoClinico {
    /** solicitacaoQuimioterapia */
    solicitacaoQuimioterapia?: SolicitacaoQuimioterapia;
    /** solicitacaoRadioterapia */
    solicitacaoRadioterapia?: SolicitacaoRadioterapia;
    /** solicitacaoOPME */
    solicitacaoOPME?: SolicitacaoOpme;
}
