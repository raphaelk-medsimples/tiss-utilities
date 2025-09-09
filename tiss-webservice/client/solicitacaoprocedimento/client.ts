import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { SolicitacaoProcedimentoWs } from "./definitions/SolicitacaoProcedimentoWs";
import { AutorizacaoProcedimentoWs } from "./definitions/AutorizacaoProcedimentoWs";
import { SolicitacaoProcedimento } from "./services/SolicitacaoProcedimento";

export interface SolicitacaoProcedimentoV40100Client extends SoapClient {
    TissSolicitacaoProcedimento: SolicitacaoProcedimento;
    tissSolicitacaoProcedimento_OperationAsync(solicitacaoProcedimentoWs: SolicitacaoProcedimentoWs, options?: ISoapExOptions): Promise<[result: AutorizacaoProcedimentoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SolicitacaoProcedimentoV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SolicitacaoProcedimentoV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
