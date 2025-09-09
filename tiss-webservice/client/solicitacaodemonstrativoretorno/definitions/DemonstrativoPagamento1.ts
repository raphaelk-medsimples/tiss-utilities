import { CabecalhoDemonstrativo } from "./CabecalhoDemonstrativo";
import { DadosContratado } from "./DadosContratado";
import { Pagamentos } from "./Pagamentos";
import { TotaisDemonstrativo } from "./TotaisDemonstrativo";

/**
 * demonstrativoPagamento
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DemonstrativoPagamento1 {
    /** cabecalhoDemonstrativo */
    cabecalhoDemonstrativo?: CabecalhoDemonstrativo;
    /** dadosContratado */
    dadosContratado?: DadosContratado;
    /** pagamentos */
    pagamentos?: Pagamentos;
    /** totaisDemonstrativo */
    totaisDemonstrativo?: TotaisDemonstrativo;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
}
