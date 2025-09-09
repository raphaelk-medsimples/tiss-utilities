import { IdentificacaoSolicitacao } from "./IdentificacaoSolicitacao";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosContratado } from "./DadosContratado";

/**
 * solicitacaoStatusAutorizacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoStatusAutorizacao {
    /** identificacaoSolicitacao */
    identificacaoSolicitacao?: IdentificacaoSolicitacao;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** dadosContratado */
    dadosContratado?: DadosContratado;
}
