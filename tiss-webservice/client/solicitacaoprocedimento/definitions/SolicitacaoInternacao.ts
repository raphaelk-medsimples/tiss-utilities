import { DadosBeneficiario } from "./DadosBeneficiario";
import { IdentificacaoSolicitante } from "./IdentificacaoSolicitante";
import { DadosHospitalSolicitado } from "./DadosHospitalSolicitado";
import { DadosInternacao } from "./DadosInternacao";
import { HipotesesDiagnosticas } from "./HipotesesDiagnosticas";
import { ProcedimentosSolicitados1 } from "./ProcedimentosSolicitados1";
import { AnexoClinico1 } from "./AnexoClinico1";

/**
 * solicitacaoInternacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoInternacao {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** dm_ausenciaCodValidacao|string|01,02,03,04,05,06,07 */
    ausenciaCodValidacao?: string;
    /** st_texto10|string|minLength,maxLength */
    codValidacao?: string;
    /** dm_etapasAutorizacao|ans:st_texto1|1,2 */
    tipoEtapaAutorizacao?: string;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** identificacaoSolicitante */
    identificacaoSolicitante?: IdentificacaoSolicitante;
    /** dadosHospitalSolicitado */
    dadosHospitalSolicitado?: DadosHospitalSolicitado;
    /** dadosInternacao */
    dadosInternacao?: DadosInternacao;
    /** hipotesesDiagnosticas */
    hipotesesDiagnosticas?: HipotesesDiagnosticas;
    /** procedimentosSolicitados[] */
    procedimentosSolicitados?: Array<ProcedimentosSolicitados1>;
    /** st_data|date */
    dataSolicitacao?: string;
    /** st_texto1000|string|minLength,maxLength */
    observacao?: string;
    /** anexoClinico */
    anexoClinico?: AnexoClinico1;
}
