import { SolicitacaoProcedimentoWs } from "../definitions/SolicitacaoProcedimentoWs";
import { AutorizacaoProcedimentoWs } from "../definitions/AutorizacaoProcedimentoWs";

export interface SolicitacaoProcedimentoPort {
    tissSolicitacaoProcedimento_Operation(solicitacaoProcedimentoWs: SolicitacaoProcedimentoWs, callback: (err: any, result: AutorizacaoProcedimentoWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
