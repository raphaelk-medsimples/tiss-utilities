import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { PedidoElegibilidadeWs } from "./definitions/PedidoElegibilidadeWs";
import { RespostaElegibilidadeWs } from "./definitions/RespostaElegibilidadeWs";
import { VerificaElegibilidade } from "./services/VerificaElegibilidade";

export interface VerificaElegibilidadeV40100Client extends SoapClient {
    TissVerificaElegibilidade: VerificaElegibilidade;
    tissVerificaElegibilidade_OperationAsync(pedidoElegibilidadeWs: PedidoElegibilidadeWs, options?: ISoapExOptions): Promise<[result: RespostaElegibilidadeWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create VerificaElegibilidadeV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<VerificaElegibilidadeV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
