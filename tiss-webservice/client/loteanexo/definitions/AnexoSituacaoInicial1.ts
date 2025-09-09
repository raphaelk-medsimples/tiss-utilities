import { CtSituacaoInicial1 } from "./CtSituacaoInicial1";

/** anexoSituacaoInicial */
export interface AnexoSituacaoInicial1 {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaAnexo?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaReferenciada?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroCarteira?: string;
    /** ct_situacaoInicial */
    ct_situacaoInicial?: CtSituacaoInicial1;
    /** st_texto70|string|minLength,maxLength */
    nomeBeneficiario?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeSocialBeneficiario?: string;
}
