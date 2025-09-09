import { DadosProfissionaisResponsaveis } from "./DadosProfissionaisResponsaveis";
import { ProcedimentosSolicitados2 } from "./ProcedimentosSolicitados2";
import { OdontoInicial } from "./OdontoInicial";

/**
 * solicitacaoOdontologia
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoOdontologia {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrincipal?: string;
    /** dm_ausenciaCodValidacao|string|01,02,03,04,05,06,07 */
    ausenciaCodValidacao?: string;
    /** st_texto10|string|minLength,maxLength */
    codValidacao?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroCarteira?: string;
    /** dm_simNao|string|S,N */
    atendimentoRN?: string;
    /** dm_tipoIdent|ans:st_texto2|01,02,03,04,05,06,07,08,09 */
    tipoIdent?: string;
    /** base64Binary */
    identificadorBeneficiario?: string;
    /** st_texto40|string|minLength,maxLength */
    planoBeneficiario?: string;
    /** st_texto40|string|minLength,maxLength */
    nomeEmpresa?: string;
    /** dadosProfissionaisResponsaveis */
    dadosProfissionaisResponsaveis?: DadosProfissionaisResponsaveis;
    /** procedimentosSolicitados[] */
    procedimentosSolicitados?: Array<ProcedimentosSolicitados2>;
    /** st_data|date */
    dataTerminoTrat?: string;
    /** dm_tipoAtendimentoOdonto|string|1,2,3,4,5 */
    tipoAtendimento?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    qtdTotalUS?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotalProc?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotalFranquia?: string;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
    /** odontoInicial */
    odontoInicial?: OdontoInicial;
}
