import { AutorizacaoDosServicos } from "./AutorizacaoDosServicos";

/**
 * autorizacaoProrrogacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AutorizacaoProrrogacao {
    /** autorizacaoDosServicos */
    autorizacaoDosServicos?: AutorizacaoDosServicos;
    /** st_texto70|string|minLength,maxLength */
    nomeContratado?: string;
    /** st_numerico3|integer|totalDigits */
    diariasAutorizadas?: string;
    /** dm_tipoAcomodacao|string|02,09,10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32,33,36,37,38,39,40,41,43,44,45,46,47,48,49,50,51,52,53,56,57,58,59 */
    acomodacaoAutorizada?: string;
    /** st_texto500|string|minLength,maxLength */
    justificativaOperadora?: string;
}
