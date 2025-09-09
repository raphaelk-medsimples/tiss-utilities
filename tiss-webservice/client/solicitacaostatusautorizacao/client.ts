import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { SolicitacaoStatusAutorizacaoWs } from "./definitions/SolicitacaoStatusAutorizacaoWs";
import { SituacaoAutorizacaoWs } from "./definitions/SituacaoAutorizacaoWs";
import { SolicitacaoStatusAutorizacao } from "./services/SolicitacaoStatusAutorizacao";

export interface SolicitacaoStatusAutorizacaoV40100Client extends SoapClient {
    TissSolicitacaoStatusAutorizacao: SolicitacaoStatusAutorizacao;
    tissSolicitacaoStatusAutorizacao_OperationAsync(solicitacaoStatusAutorizacaoWs: SolicitacaoStatusAutorizacaoWs, options?: ISoapExOptions): Promise<[result: SituacaoAutorizacaoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SolicitacaoStatusAutorizacaoV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SolicitacaoStatusAutorizacaoV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
