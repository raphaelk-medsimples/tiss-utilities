import { DadosAutorizacao } from "./DadosAutorizacao";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { MotivosNegativa } from "./MotivosNegativa";
import { DadosPrestador } from "./DadosPrestador";
import { ServicosAutorizadosOpme } from "./ServicosAutorizadosOpme";

/**
 * anexoOPME
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AnexoOpme {
    /** dadosAutorizacao */
    dadosAutorizacao?: DadosAutorizacao;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** st_texto70|string|minLength,maxLength */
    nomebeneficiario?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeSocialBeneficiario?: string;
    /** dm_statusSolicitacao|string|length,1,2,3,4,5,6,7 */
    statusSolicitacao?: string;
    /** motivosNegativa */
    motivosNegativa?: MotivosNegativa;
    /** prestadorAutorizado */
    prestadorAutorizado?: DadosPrestador;
    /** servicosAutorizadosOPME[] */
    servicosAutorizadosOPME?: Array<ServicosAutorizadosOpme>;
}
