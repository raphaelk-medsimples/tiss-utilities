import { SituacaoClinica } from "./SituacaoClinica";

/** ct_situacaoInicial */
export interface CtSituacaoInicial {
    /** situacaoClinica */
    situacaoClinica?: SituacaoClinica;
    /** st_logico|boolean */
    doencaPeriodontal?: string;
    /** st_logico|boolean */
    alteracaoTecidoMole?: string;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
