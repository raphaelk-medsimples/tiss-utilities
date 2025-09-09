import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosInternacao1 } from "./DadosInternacao1";

/**
 * beneficiarioComunicacaoRet
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface BeneficiarioComunicacaoRet {
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** st_texto70|string|minLength,maxLength */
    nomeBeneficiario?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeSocialBeneficiario?: string;
    /** dm_tipoEvento|string|I,A */
    tipoEvento?: string;
    /** dadosInternacao */
    dadosInternacao?: DadosInternacao1;
}
