import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { LoteAnexoWs } from "./definitions/LoteAnexoWs";
import { ProtocoloRecebimentoAnexoWs } from "./definitions/ProtocoloRecebimentoAnexoWs";
import { LoteAnexo } from "./services/LoteAnexo";

export interface LoteAnexoV40100Client extends SoapClient {
    TissLoteAnexo: LoteAnexo;
    tissLoteAnexo_OperationAsync(loteAnexoWs: LoteAnexoWs, options?: ISoapExOptions): Promise<[result: ProtocoloRecebimentoAnexoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create LoteAnexoV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<LoteAnexoV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
