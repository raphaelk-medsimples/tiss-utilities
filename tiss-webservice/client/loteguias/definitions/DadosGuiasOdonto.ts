import { VlInformadoGuia } from "./VlInformadoGuia";
import { GlosaGuia1 } from "./GlosaGuia1";
import { ProcedimentosRealizados2 } from "./ProcedimentosRealizados2";

/**
 * dadosGuiasOdonto
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosGuiasOdonto {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
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
    /** vlInformadoGuia */
    vlInformadoGuia?: VlInformadoGuia;
    /** glosaGuia */
    glosaGuia?: GlosaGuia1;
    /** procedimentosRealizados */
    procedimentosRealizados?: ProcedimentosRealizados2;
}
