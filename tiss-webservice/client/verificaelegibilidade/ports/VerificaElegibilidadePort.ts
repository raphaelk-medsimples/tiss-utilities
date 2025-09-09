import { PedidoElegibilidadeWs } from "../definitions/PedidoElegibilidadeWs";
import { RespostaElegibilidadeWs } from "../definitions/RespostaElegibilidadeWs";

export interface VerificaElegibilidadePort {
    tissVerificaElegibilidade_Operation(pedidoElegibilidadeWs: PedidoElegibilidadeWs, callback: (err: any, result: RespostaElegibilidadeWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
