import { DadosPrestador } from "./DadosPrestador";

/**
 * solicitacaoStatusProtocolo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoStatusProtocolo {
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
}
