import { SolicitacaoDemonstrativoRetornoWs } from "../definitions/SolicitacaoDemonstrativoRetornoWs";
import { DemonstrativoRetornoWs } from "../definitions/DemonstrativoRetornoWs";

export interface SolicitacaoDemonstrativoRetornoPort {
    tissSolicitacaoDemonstrativoRetorno_Operation(solicitacaoDemonstrativoRetornoWs: SolicitacaoDemonstrativoRetornoWs, callback: (err: any, result: DemonstrativoRetornoWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
