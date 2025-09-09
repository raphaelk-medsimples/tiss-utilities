import { CabecalhoDemonstrativo } from "./CabecalhoDemonstrativo";
import { DadosPrestador1 } from "./DadosPrestador1";
import { DadosConta } from "./DadosConta";

/**
 * demonstrativoAnaliseConta
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DemonstrativoAnaliseConta {
    /** cabecalhoDemonstrativo */
    cabecalhoDemonstrativo?: CabecalhoDemonstrativo;
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador1;
    /** dadosConta */
    dadosConta?: DadosConta;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorInformadoGeral?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorProcessadoGeral?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorLiberadoGeral?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorGlosaGeral?: string;
}
