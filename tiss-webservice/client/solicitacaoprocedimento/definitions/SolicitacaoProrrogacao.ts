import { DadosBeneficiario1 } from "./DadosBeneficiario1";
import { ContratadoSolicitante } from "./ContratadoSolicitante";
import { ProfissionalSolicitante } from "./ProfissionalSolicitante";
import { DadosInternacao1 } from "./DadosInternacao1";
import { ProcedimentosAdicionais } from "./ProcedimentosAdicionais";
import { AnexoClinicoProrrogacao } from "./AnexoClinicoProrrogacao";

/**
 * solicitacaoProrrogacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoProrrogacao {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    nrGuiaReferenciada?: string;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario1;
    /** dadosContratadoSolicitante */
    dadosContratadoSolicitante?: ContratadoSolicitante;
    /** st_texto70|string|minLength,maxLength */
    nomeContratadoSolicitante?: string;
    /** dadosProfissionalSolicitante */
    dadosProfissionalSolicitante?: ProfissionalSolicitante;
    /** dadosInternacao */
    dadosInternacao?: DadosInternacao1;
    /** procedimentosAdicionais[] */
    procedimentosAdicionais?: Array<ProcedimentosAdicionais>;
    /** anexoClinicoProrrogacao */
    anexoClinicoProrrogacao?: AnexoClinicoProrrogacao;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
    /** st_data|date */
    dataSolicitacao?: string;
}
