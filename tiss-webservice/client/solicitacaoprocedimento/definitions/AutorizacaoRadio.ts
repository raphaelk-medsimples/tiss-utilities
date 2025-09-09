import { DadosAutorizacao } from "./DadosAutorizacao";
import { DadosComplementaresBeneficiario1 } from "./DadosComplementaresBeneficiario1";
import { MedicoSolicitante } from "./MedicoSolicitante";
import { DiagnosticoOncologicoRadio1 } from "./DiagnosticoOncologicoRadio1";
import { TratamentosAnteriores3 } from "./TratamentosAnteriores3";
import { MotivosNegativa3 } from "./MotivosNegativa3";

/**
 * autorizacaoRadio
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AutorizacaoRadio {
    /** dadosAutorizacao */
    dadosAutorizacao?: DadosAutorizacao;
    /** st_texto20|string|minLength,maxLength */
    numeroCarteira?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeBeneficiario?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeSocialBeneficiario?: string;
    /** dm_statusSolicitacao|string|length,1,2,3,4,5,6,7 */
    statusSolicitacao?: string;
    /** dadosComplementaresBeneficiario */
    dadosComplementaresBeneficiario?: DadosComplementaresBeneficiario1;
    /** medicoSolicitante */
    medicoSolicitante?: MedicoSolicitante;
    /** diagnosticoOncologicoRadio */
    diagnosticoOncologicoRadio?: DiagnosticoOncologicoRadio1;
    /** tratamentosAnteriores */
    tratamentosAnteriores?: TratamentosAnteriores3;
    /** st_numerico3|integer|totalDigits */
    numeroCampos?: string;
    /** st_numerico4|integer|totalDigits */
    doseCampo?: string;
    /** st_numerico4|integer|totalDigits */
    doseTotal?: string;
    /** st_numerico3|integer|totalDigits */
    nrDias?: string;
    /** st_data|date */
    dtPrevistaInicio?: string;
    /** motivosNegativa */
    motivosNegativa?: MotivosNegativa3;
}
