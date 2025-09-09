import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { SolicitacaoDemonstrativoRetornoWs } from "./definitions/SolicitacaoDemonstrativoRetornoWs";
import { DemonstrativoRetornoWs } from "./definitions/DemonstrativoRetornoWs";
import { SolicitacaoDemonstrativoRetorno } from "./services/SolicitacaoDemonstrativoRetorno";

export interface SolicitacaoDemonstrativoRetornoV40100Client extends SoapClient {
    TissSolicitacaoDemonstrativoRetorno: SolicitacaoDemonstrativoRetorno;
    tissSolicitacaoDemonstrativoRetorno_OperationAsync(solicitacaoDemonstrativoRetornoWs: SolicitacaoDemonstrativoRetornoWs, options?: ISoapExOptions): Promise<[result: DemonstrativoRetornoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SolicitacaoDemonstrativoRetornoV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SolicitacaoDemonstrativoRetornoV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
