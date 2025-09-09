import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { SolicitacaoStatusProtocoloWs } from "./definitions/SolicitacaoStatusProtocoloWs";
import { SituacaoProtocoloWs } from "./definitions/SituacaoProtocoloWs";
import { SolicitacaoStatusProtocolo } from "./services/SolicitacaoStatusProtocolo";

export interface SolicitacaoStatusProtocoloV40100Client extends SoapClient {
    TissSolicitacaoStatusProtocolo: SolicitacaoStatusProtocolo;
    tissSolicitacaoStatusProtocolo_OperationAsync(solicitacaoStatusProtocoloWs: SolicitacaoStatusProtocoloWs, options?: ISoapExOptions): Promise<[result: SituacaoProtocoloWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SolicitacaoStatusProtocoloV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SolicitacaoStatusProtocoloV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
