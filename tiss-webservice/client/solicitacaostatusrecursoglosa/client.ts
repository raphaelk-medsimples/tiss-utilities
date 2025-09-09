import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { SolicitacaoStatusRecursoGlosaWs } from "./definitions/SolicitacaoStatusRecursoGlosaWs";
import { SituacaoProtocoloRecursoWs } from "./definitions/SituacaoProtocoloRecursoWs";
import { SolicitacaoStatusProtocoloRecurso } from "./services/SolicitacaoStatusProtocoloRecurso";

export interface SolicitacaoStatusRecursoGlosaV40100Client extends SoapClient {
    TissSolicitacaoStatusProtocoloRecurso: SolicitacaoStatusProtocoloRecurso;
    tissSolicitacaoStatusProtocoloRecurso_OperationAsync(solicitacaoStatusRecursoGlosaWs: SolicitacaoStatusRecursoGlosaWs, options?: ISoapExOptions): Promise<[result: SituacaoProtocoloRecursoWs, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SolicitacaoStatusRecursoGlosaV40100Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SolicitacaoStatusRecursoGlosaV40100Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
