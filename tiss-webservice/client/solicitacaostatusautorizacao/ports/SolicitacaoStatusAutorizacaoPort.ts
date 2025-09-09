import { SolicitacaoStatusAutorizacaoWs } from "../definitions/SolicitacaoStatusAutorizacaoWs";
import { SituacaoAutorizacaoWs } from "../definitions/SituacaoAutorizacaoWs";

export interface SolicitacaoStatusAutorizacaoPort {
    tissSolicitacaoStatusAutorizacao_Operation(solicitacaoStatusAutorizacaoWs: SolicitacaoStatusAutorizacaoWs, callback: (err: any, result: SituacaoAutorizacaoWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
