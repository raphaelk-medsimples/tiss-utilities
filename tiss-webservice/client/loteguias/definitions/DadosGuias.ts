import { DadosBeneficiario } from "./DadosBeneficiario";
import { VlInformadoGuia } from "./VlInformadoGuia";
import { GlosaGuia } from "./GlosaGuia";
import { ProcedimentosRealizados1 } from "./ProcedimentosRealizados1";

/**
 * dadosGuias
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosGuias {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** dm_ausenciaCodValidacao|string|01,02,03,04,05,06,07 */
    ausenciaCodValidacao?: string;
    /** st_texto10|string|minLength,maxLength */
    codValidacao?: string;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** st_data|date */
    dataRealizacao?: string;
    /** vlInformadoGuia */
    vlInformadoGuia?: VlInformadoGuia;
    /** glosaGuia */
    glosaGuia?: GlosaGuia;
    /** procedimentosRealizados */
    procedimentosRealizados?: ProcedimentosRealizados1;
}
