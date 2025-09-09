import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { CancelaGuiaWs } from "./definitions/CancelaGuiaWs";
import { ReciboCancelaGuiaWs } from "./definitions/ReciboCancelaGuiaWs";
import { CancelaGuia } from "./services/CancelaGuia";

export interface CancelaGuiaV40100Client extends SoapClient {
    TissCancelaGuia: CancelaGuia;
    tissCancelaGuia_OperationAsync(cancelaGuiaWs: CancelaGuiaWs, options?: ISoapExOptions): Promise<[result: ReciboCancelaGuiaWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CancelaGuiaV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CancelaGuiaV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
