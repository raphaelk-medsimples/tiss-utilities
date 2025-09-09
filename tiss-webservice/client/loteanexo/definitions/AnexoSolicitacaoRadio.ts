import { CabecalhoAnexo } from "./CabecalhoAnexo";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosComplementaresBeneficiario } from "./DadosComplementaresBeneficiario";
import { MedicoSolicitante } from "./MedicoSolicitante";
import { DiagnosticoOncologicoRadio } from "./DiagnosticoOncologicoRadio";
import { TratamentosAnteriores } from "./TratamentosAnteriores";

/**
 * anexoSolicitacaoRadio
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AnexoSolicitacaoRadio {
    /** cabecalhoAnexo */
    cabecalhoAnexo?: CabecalhoAnexo;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** dadosComplementaresBeneficiario */
    dadosComplementaresBeneficiario?: DadosComplementaresBeneficiario;
    /** medicoSolicitante */
    medicoSolicitante?: MedicoSolicitante;
    /** diagnosticoOncologicoRadio */
    diagnosticoOncologicoRadio?: DiagnosticoOncologicoRadio;
    /** tratamentosAnteriores */
    tratamentosAnteriores?: TratamentosAnteriores;
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
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
