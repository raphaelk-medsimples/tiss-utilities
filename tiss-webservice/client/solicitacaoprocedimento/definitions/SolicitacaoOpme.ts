import { CabecalhoAnexo } from "./CabecalhoAnexo";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { MedicoSolicitante } from "./MedicoSolicitante";
import { OpmeSolicitadas } from "./OpmeSolicitadas";

/**
 * solicitacaoOPME
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface SolicitacaoOpme {
    /** cabecalhoAnexo */
    cabecalhoAnexo?: CabecalhoAnexo;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** profissionalSolicitante */
    profissionalSolicitante?: MedicoSolicitante;
    /** st_texto1000|string|minLength,maxLength */
    justificativaTecnica?: string;
    /** st_texto500|string|minLength,maxLength */
    especificacaoMaterial?: string;
    /** opmeSolicitadas */
    opmeSolicitadas?: OpmeSolicitadas;
    /** st_texto500|string|minLength,maxLength */
    Observacao?: string;
}
