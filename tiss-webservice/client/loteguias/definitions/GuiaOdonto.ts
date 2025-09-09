import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosProfissionaisResponsaveis } from "./DadosProfissionaisResponsaveis";
import { ProcedimentosExecutados2 } from "./ProcedimentosExecutados2";
import { OdontoInicial } from "./OdontoInicial";
import { AssinaturaDigitalGuia } from "./AssinaturaDigitalGuia";

/**
 * guiaOdonto
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface GuiaOdonto {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrincipal?: string;
    /** st_data|date */
    dataAutorizacao?: string;
    /** st_texto20|string|minLength,maxLength */
    senhaAutorizacao?: string;
    /** st_data|date */
    validadeSenha?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** dm_ausenciaCodValidacao|string|01,02,03,04,05,06,07 */
    ausenciaCodValidacao?: string;
    /** st_texto10|string|minLength,maxLength */
    codValidacao?: string;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** st_texto40|string|minLength,maxLength */
    planoBeneficiario?: string;
    /** st_texto40|string|minLength,maxLength */
    nomeEmpresa?: string;
    /** dadosProfissionaisResponsaveis */
    dadosProfissionaisResponsaveis?: DadosProfissionaisResponsaveis;
    /** procedimentosExecutados[] */
    procedimentosExecutados?: Array<ProcedimentosExecutados2>;
    /** st_data|date */
    dataTerminoTrat?: string;
    /** dm_tipoAtendimentoOdonto|string|1,2,3,4,5 */
    tipoAtendimento?: string;
    /** dm_tipoFaturamentoOdonto|string|1,4 */
    tipoFaturamento?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    qtdTotalUS?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalProc?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalFranquia?: string;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
    /** odontoInicial */
    odontoInicial?: OdontoInicial;
    /** assinaturaDigitalGuia */
    assinaturaDigitalGuia?: AssinaturaDigitalGuia;
}
