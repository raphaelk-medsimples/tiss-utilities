import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosInternacao } from "./DadosInternacao";

/**
 * comunicacaoBeneficiario
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ComunicacaoBeneficiario {
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** st_data|date */
    dataEvento?: string;
    /** dm_tipoEvento|string|I,A */
    tipoEvento?: string;
    /** dadosInternacao */
    dadosInternacao?: DadosInternacao;
}
