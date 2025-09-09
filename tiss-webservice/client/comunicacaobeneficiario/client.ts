import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { ComunicacaoBeneficiarioWs } from "./definitions/ComunicacaoBeneficiarioWs";
import { ReciboComunicacaoWs } from "./definitions/ReciboComunicacaoWs";
import { ComunicacaoBeneficiario } from "./services/ComunicacaoBeneficiario";

export interface ComunicacaoBeneficiarioV40100Client extends SoapClient {
    TissComunicacaoBeneficiario: ComunicacaoBeneficiario;
    tissComunicacaoBeneficiario_OperationAsync(comunicacaoBeneficiarioWs: ComunicacaoBeneficiarioWs, options?: ISoapExOptions): Promise<[result: ReciboComunicacaoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ComunicacaoBeneficiarioV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ComunicacaoBeneficiarioV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
