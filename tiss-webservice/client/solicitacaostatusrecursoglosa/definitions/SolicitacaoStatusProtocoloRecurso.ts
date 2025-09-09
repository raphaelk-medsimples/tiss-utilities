import { DadosPrestador } from "./DadosPrestador";

/**
 * solicitacaoStatusProtocoloRecurso
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoStatusProtocoloRecurso {
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
}
