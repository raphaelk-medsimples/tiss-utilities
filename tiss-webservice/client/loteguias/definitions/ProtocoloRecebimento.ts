import { ContratadoSolicitante } from "./ContratadoSolicitante";
import { DetalheProtocolo } from "./DetalheProtocolo";

/**
 * protocoloRecebimento
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ProtocoloRecebimento {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** dadosPrestador */
    dadosPrestador?: ContratadoSolicitante;
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_data|date */
    dataEnvioLote?: string;
    /** detalheProtocolo */
    detalheProtocolo?: DetalheProtocolo;
}
