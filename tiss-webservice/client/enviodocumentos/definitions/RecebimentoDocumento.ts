import { MensagemErro } from "./MensagemErro";
import { ReciboDocumentos } from "./ReciboDocumentos";

/** recebimentoDocumento */
export interface RecebimentoDocumento {
    /** mensagemErro */
    mensagemErro?: MensagemErro;
    /** reciboDocumentos */
    reciboDocumentos?: ReciboDocumentos;
}
