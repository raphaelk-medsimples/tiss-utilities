import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { EnvioDocumentoWs } from "./definitions/EnvioDocumentoWs";
import { ReciboDocumentosWs } from "./definitions/ReciboDocumentosWs";
import { EnvioDocumentos } from "./services/EnvioDocumentos";

export interface EnvioDocumentosV40100Client extends SoapClient {
    TissEnvioDocumentos: EnvioDocumentos;
    tissEnvioDocumentos_OperationAsync(envioDocumentoWs: EnvioDocumentoWs, options?: ISoapExOptions): Promise<[result: ReciboDocumentosWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create EnvioDocumentosV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<EnvioDocumentosV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
