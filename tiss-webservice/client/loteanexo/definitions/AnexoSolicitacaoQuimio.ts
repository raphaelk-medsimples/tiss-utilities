import { CabecalhoAnexo } from "./CabecalhoAnexo";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosComplementaresBeneficiario1 } from "./DadosComplementaresBeneficiario1";
import { MedicoSolicitante } from "./MedicoSolicitante";
import { DiagnosticoOncologicoQuimioterapia } from "./DiagnosticoOncologicoQuimioterapia";
import { DrogasSolicitadas } from "./DrogasSolicitadas";
import { TratamentosAnteriores1 } from "./TratamentosAnteriores1";

/**
 * anexoSolicitacaoQuimio
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AnexoSolicitacaoQuimio {
    /** cabecalhoAnexo */
    cabecalhoAnexo?: CabecalhoAnexo;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** dadosComplementaresBeneficiario */
    dadosComplementaresBeneficiario?: DadosComplementaresBeneficiario1;
    /** medicoSolicitante */
    medicoSolicitante?: MedicoSolicitante;
    /** diagnosticoOncologicoQuimioterapia */
    diagnosticoOncologicoQuimioterapia?: DiagnosticoOncologicoQuimioterapia;
    /** drogasSolicitadas */
    drogasSolicitadas?: DrogasSolicitadas;
    /** tratamentosAnteriores */
    tratamentosAnteriores?: TratamentosAnteriores1;
    /** st_numerico2|integer|totalDigits */
    numeroCiclos?: string;
    /** st_numerico2|integer|totalDigits */
    cicloAtual?: string;
    /** st_numerico3|integer|totalDigits */
    diasCicloAtual?: string;
    /** st_numerico3|integer|totalDigits */
    intervaloCiclos?: string;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
