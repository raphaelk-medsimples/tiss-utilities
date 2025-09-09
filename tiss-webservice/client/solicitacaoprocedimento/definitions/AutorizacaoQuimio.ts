import { DadosAutorizacao } from "./DadosAutorizacao";
import { DadosComplementaresBeneficiario } from "./DadosComplementaresBeneficiario";
import { MedicoSolicitante } from "./MedicoSolicitante";
import { DiagnosticoOncologicoQuimioterapia1 } from "./DiagnosticoOncologicoQuimioterapia1";
import { DrogasSolicitadas1 } from "./DrogasSolicitadas1";
import { TratamentosAnteriores2 } from "./TratamentosAnteriores2";
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
    diagnosticoOncologicoQuimioterapia?: DiagnosticoOncologicoQuimioterapia1;
    /** drogasSolicitadas */
    drogasSolicitadas?: DrogasSolicitadas1;
    /** tratamentosAnteriores */
    tratamentosAnteriores?: TratamentosAnteriores2;
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
