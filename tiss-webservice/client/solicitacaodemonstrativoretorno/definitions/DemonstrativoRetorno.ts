import { MensagemErro } from "./MensagemErro";
import { DemonstrativoAnaliseConta } from "./DemonstrativoAnaliseConta";
import { DemonstrativoPagamento1 } from "./DemonstrativoPagamento1";
import { DemonstrativoPagamentoOdonto } from "./DemonstrativoPagamentoOdonto";
import { SituacaoDemonstrativoRetorno } from "./SituacaoDemonstrativoRetorno";

/**
 * demonstrativoRetorno
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DemonstrativoRetorno {
    /** mensagemErro */
    mensagemErro?: MensagemErro;
    /** demonstrativoAnaliseConta[] */
    demonstrativoAnaliseConta?: Array<DemonstrativoAnaliseConta>;
    /** demonstrativoPagamento */
    demonstrativoPagamento?: DemonstrativoPagamento1;
    /** demonstrativoPagamentoOdonto */
    demonstrativoPagamentoOdonto?: DemonstrativoPagamentoOdonto;
    /** situacaoDemonstrativoRetorno */
    situacaoDemonstrativoRetorno?: SituacaoDemonstrativoRetorno;
}
