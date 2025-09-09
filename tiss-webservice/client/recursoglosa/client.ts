import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { LoteRecursoGlosaWs } from "./definitions/LoteRecursoGlosaWs";
import { ProtocoloRecebimentoRecursoWs } from "./definitions/ProtocoloRecebimentoRecursoWs";
import { RecursoGlosa } from "./services/RecursoGlosa";

export interface RecursoGlosaV40100Client extends SoapClient {
    TissRecursoGlosa: RecursoGlosa;
    tissRecursoGlosa_OperationAsync(loteRecursoGlosaWs: LoteRecursoGlosaWs, options?: ISoapExOptions): Promise<[result: ProtocoloRecebimentoRecursoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create RecursoGlosaV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<RecursoGlosaV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
