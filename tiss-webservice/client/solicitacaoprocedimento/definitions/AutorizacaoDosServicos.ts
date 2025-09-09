import { DadosAutorizacao } from "./DadosAutorizacao";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { PrestadorAutorizado } from "./PrestadorAutorizado";
import { MotivosNegativa } from "./MotivosNegativa";
import { ServicosAutorizados } from "./ServicosAutorizados";
import { AutorizacaoQuimio } from "./AutorizacaoQuimio";
import { AutorizacaoRadio } from "./AutorizacaoRadio";

/**
 * autorizacaoDosServicos
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AutorizacaoDosServicos {
    /** dadosAutorizacao */
    dadosAutorizacao?: DadosAutorizacao;
    /** dm_etapasAutorizacao|ans:st_texto1|1,2 */
    tipoEtapaAutorizacao?: string;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** st_texto70|string|minLength,maxLength */
    nomeBeneficiario?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeSocialBeneficiario?: string;
    /** prestadorAutorizado */
    prestadorAutorizado?: PrestadorAutorizado;
    /** dm_statusSolicitacao|string|length,1,2,3,4,5,6,7 */
    statusSolicitacao?: string;
    /** motivosNegativa */
    motivosNegativa?: MotivosNegativa;
    /** servicosAutorizados */
    servicosAutorizados?: ServicosAutorizados;
    /** st_texto1000|string|minLength,maxLength */
    observacao?: string;
    /** autorizacaoQuimio */
    autorizacaoQuimio?: AutorizacaoQuimio;
    /** autorizacaoRadio */
    autorizacaoRadio?: AutorizacaoRadio;
}
