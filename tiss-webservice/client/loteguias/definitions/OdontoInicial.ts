import { CtSituacaoInicial } from "./CtSituacaoInicial";

/**
 * odontoInicial
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface OdontoInicial {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaAnexo?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaReferenciada?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** ct_situacaoInicial */
    ct_situacaoInicial?: CtSituacaoInicial;
}
