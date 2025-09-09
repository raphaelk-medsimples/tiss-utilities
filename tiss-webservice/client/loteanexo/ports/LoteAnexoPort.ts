import { LoteAnexoWs } from "../definitions/LoteAnexoWs";
import { ProtocoloRecebimentoAnexoWs } from "../definitions/ProtocoloRecebimentoAnexoWs";

export interface LoteAnexoPort {
    tissLoteAnexo_Operation(loteAnexoWs: LoteAnexoWs, callback: (err: any, result: ProtocoloRecebimentoAnexoWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
