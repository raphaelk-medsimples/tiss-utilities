import { CabecalhoAnexo } from "./CabecalhoAnexo";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosComplementaresBeneficiario } from "./DadosComplementaresBeneficiario";
import { MedicoSolicitante } from "./MedicoSolicitante";
import { DiagnosticoOncologicoQuimioterapia } from "./DiagnosticoOncologicoQuimioterapia";
import { DrogasSolicitadas } from "./DrogasSolicitadas";
import { TratamentosAnteriores } from "./TratamentosAnteriores";

/**
 * solicitacaoQuimioterapia
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoQuimioterapia {
    /** cabecalhoAnexo */
    cabecalhoAnexo?: CabecalhoAnexo;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
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
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
