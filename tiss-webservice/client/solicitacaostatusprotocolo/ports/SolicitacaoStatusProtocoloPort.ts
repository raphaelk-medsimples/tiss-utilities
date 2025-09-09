import { SolicitacaoStatusProtocoloWs } from "../definitions/SolicitacaoStatusProtocoloWs";
import { SituacaoProtocoloWs } from "../definitions/SituacaoProtocoloWs";

export interface SolicitacaoStatusProtocoloPort {
    tissSolicitacaoStatusProtocolo_Operation(solicitacaoStatusProtocoloWs: SolicitacaoStatusProtocoloWs, callback: (err: any, result: SituacaoProtocoloWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
