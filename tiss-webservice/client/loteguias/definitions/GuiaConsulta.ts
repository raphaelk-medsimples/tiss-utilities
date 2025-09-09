import { CabecalhoGuia1 } from "./CabecalhoGuia1";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { ContratadoExecutante } from "./ContratadoExecutante";
import { ProfissionalSolicitante } from "./ProfissionalSolicitante";
import { DadosAtendimento1 } from "./DadosAtendimento1";
import { AssinaturaDigitalGuia } from "./AssinaturaDigitalGuia";

/**
 * guiaConsulta
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface GuiaConsulta {
    /** cabecalhoConsulta */
    cabecalhoConsulta?: CabecalhoGuia1;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** dm_ausenciaCodValidacao|string|01,02,03,04,05,06,07 */
    ausenciaCodValidacao?: string;
    /** st_texto10|string|minLength,maxLength */
    codValidacao?: string;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** contratadoExecutante */
    contratadoExecutante?: ContratadoExecutante;
    /** profissionalExecutante */
    profissionalExecutante?: ProfissionalSolicitante;
    /** dm_indicadorAcidente|string|0,1,2,9 */
    indicacaoAcidente?: string;
    /** dadosAtendimento */
    dadosAtendimento?: DadosAtendimento1;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
    /** assinaturaDigitalGuia */
    assinaturaDigitalGuia?: AssinaturaDigitalGuia;
}
