import { SolicitacaoQuimioterapia } from "./SolicitacaoQuimioterapia";
import { SolicitacaoRadioterapia } from "./SolicitacaoRadioterapia";
import { SolicitacaoOpme } from "./SolicitacaoOpme";

/** anexoClinicoProrrogacao */
export interface AnexoClinicoProrrogacao {
    /** solicitacaoQuimioterapia */
    solicitacaoQuimioterapia?: SolicitacaoQuimioterapia;
    /** solicitacaoRadioterapia */
    solicitacaoRadioterapia?: SolicitacaoRadioterapia;
    /** solicitacaoOPME */
    solicitacaoOPME?: SolicitacaoOpme;
}
