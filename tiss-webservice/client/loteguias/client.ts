import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { LoteGuiasWs } from "./definitions/LoteGuiasWs";
import { ProtocoloRecebimentoWs } from "./definitions/ProtocoloRecebimentoWs";
import { LoteGuias } from "./services/LoteGuias";

export interface LoteGuiasV40100Client extends SoapClient {
    TissLoteGuias: LoteGuias;
    tissLoteGuias_OperationAsync(loteGuiasWs: LoteGuiasWs, options?: ISoapExOptions): Promise<[result: ProtocoloRecebimentoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create LoteGuiasV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<LoteGuiasV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
