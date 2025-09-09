import { DadosAutorizacao } from "./DadosAutorizacao";
import { DadosComplementaresBeneficiario } from "./DadosComplementaresBeneficiario";
import { MedicoSolicitante } from "./MedicoSolicitante";
import { DiagnosticoOncologicoQuimioterapia } from "./DiagnosticoOncologicoQuimioterapia";
import { DrogasSolicitadas } from "./DrogasSolicitadas";
import { TratamentosAnteriores } from "./TratamentosAnteriores";
import { MotivosNegativa2 } from "./MotivosNegativa2";

/**
 * autorizacaoQuimio
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AutorizacaoQuimio {
    /** dadosAutorizacao */
    dadosAutorizacao?: DadosAutorizacao;
    /** st_texto20|string|minLength,maxLength */
    numeroCarteira?: string;
    /** dm_statusSolicitacao|string|length,1,2,3,4,5,6,7 */
    statusSolicitacao?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeBeneficiario?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeSocialBeneficiario?: string;
    /** dadosComplementaresBeneficiario */
    dadosComplementaresBeneficiario?: DadosComplementaresBeneficiario;
    /** medicoSolicitante */
    medicoSolicitante?: MedicoSolicitante;
    /** diagnosticoOncologicoQuimioterapia */
    diagnosticoOncologicoQuimioterapia?: DiagnosticoOncologicoQuimioterapia;
    /** drogasSolicitadas */
    drogasSolicitadas?: DrogasSolicitadas;
    /** tratamentosAnteriores */
    tratamentosAnteriores?: TratamentosAnteriores;
    /** st_numerico2|integer|totalDigits */
    numeroCiclos?: string;
    /** st_numerico2|integer|totalDigits */
    cicloAtual?: string;
    /** st_numerico3|integer|totalDigits */
    diasCicloAtual?: string;
    /** st_numerico3|integer|totalDigits */
    intervaloCiclos?: string;
    /** motivosNegativa */
    motivosNegativa?: MotivosNegativa2;
}
