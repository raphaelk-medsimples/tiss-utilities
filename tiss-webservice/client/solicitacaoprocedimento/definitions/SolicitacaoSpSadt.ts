import { CabecalhoSolicitacao } from "./CabecalhoSolicitacao";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosSolicitante } from "./DadosSolicitante";
import { ProcedimentosSolicitados } from "./ProcedimentosSolicitados";
import { DadosExecutante } from "./DadosExecutante";
import { AnexoClinico } from "./AnexoClinico";

/**
 * solicitacaoSP-SADT
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoSpSadt {
    /** cabecalhoSolicitacao */
    cabecalhoSolicitacao?: CabecalhoSolicitacao;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrincipal?: string;
    /** dm_ausenciaCodValidacao|string|01,02,03,04,05,06,07 */
    ausenciaCodValidacao?: string;
    /** st_texto10|string|minLength,maxLength */
    codValidacao?: string;
    /** dm_etapasAutorizacao|ans:st_texto1|1,2 */
    tipoEtapaAutorizacao?: string;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** dadosSolicitante */
    dadosSolicitante?: DadosSolicitante;
    /** dm_caraterAtendimento|string|1,2 */
    caraterAtendimento?: string;
    /** st_data|date */
    dataSolicitacao?: string;
    /** st_texto500|string|minLength,maxLength */
    indicacaoClinica?: string;
    /** dm_cobEsp|string|maxLength,01,02,03 */
    coberturaEspecial?: string;
    /** procedimentosSolicitados[] */
    procedimentosSolicitados?: Array<ProcedimentosSolicitados>;
    /** dadosExecutante */
    dadosExecutante?: DadosExecutante;
    /** anexoClinico */
    anexoClinico?: AnexoClinico;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
