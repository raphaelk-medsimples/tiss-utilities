import { CabecalhoDemonstrativoOdonto } from "./CabecalhoDemonstrativoOdonto";
import { DadosPrestador2 } from "./DadosPrestador2";
import { DadosPagamentoPorData } from "./DadosPagamentoPorData";
import { TotaisBrutoDemonstrativo } from "./TotaisBrutoDemonstrativo";
import { DebCredDemonstrativo } from "./DebCredDemonstrativo";

/**
 * demonstrativoPagamentoOdonto
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DemonstrativoPagamentoOdonto {
    /** cabecalhoDemonstrativoOdonto */
    cabecalhoDemonstrativoOdonto?: CabecalhoDemonstrativoOdonto;
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador2;
    /** dadosPagamentoPorData[] */
    dadosPagamentoPorData?: Array<DadosPagamentoPorData>;
    /** totaisBrutoDemonstrativo */
    totaisBrutoDemonstrativo?: TotaisBrutoDemonstrativo;
    /** debCredDemonstrativo */
    debCredDemonstrativo?: DebCredDemonstrativo;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    totalDebitosDemonstativo?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    totalCreditosDemonstrativo?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorRecebidoDemonstrativo?: string;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
