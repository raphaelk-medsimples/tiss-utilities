import { CtSituacaoInicial } from "./CtSituacaoInicial";

/**
 * anexoSituacaoInicial
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AnexoSituacaoInicial {
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
    ct_situacaoInicial?: CtSituacaoInicial;
}
