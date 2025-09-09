import { LoteGuiasWs } from "../definitions/LoteGuiasWs";
import { ProtocoloRecebimentoWs } from "../definitions/ProtocoloRecebimentoWs";

export interface LoteGuiasPort {
    tissLoteGuias_Operation(loteGuiasWs: LoteGuiasWs, callback: (err: any, result: ProtocoloRecebimentoWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
