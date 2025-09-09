import { DadosAutorizacao } from "./DadosAutorizacao";
import { ContratadoSolicitante } from "./ContratadoSolicitante";
import { ProcedimentosAutorizados } from "./ProcedimentosAutorizados";
import { MotivosNegativa5 } from "./MotivosNegativa5";

/**
 * autorizacaoServicoOdonto
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AutorizacaoServicoOdonto {
    /** dadosAutorizacao */
    dadosAutorizacao?: DadosAutorizacao;
    /** st_texto20|string|minLength,maxLength */
    numeroCarteira?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeBeneficiario?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeSocialBeneficiario?: string;
    /** dm_tipoIdent|ans:st_texto2|01,02,03,04,05,06,07,08,09 */
    tipoIdent?: string;
    /** base64Binary */
    identificadorBeneficiario?: string;
    /** dm_statusSolicitacao|string|length,1,2,3,4,5,6,7 */
    statusSolicitacao?: string;
    /** prestadorAutorizado */
    prestadorAutorizado?: ContratadoSolicitante;
    /** procedimentosAutorizados[] */
    procedimentosAutorizados?: Array<ProcedimentosAutorizados>;
    /** motivosNegativa */
    motivosNegativa?: MotivosNegativa5;
}
