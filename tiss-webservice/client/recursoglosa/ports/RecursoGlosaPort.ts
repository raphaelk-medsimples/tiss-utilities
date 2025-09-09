import { LoteRecursoGlosaWs } from "../definitions/LoteRecursoGlosaWs";
import { ProtocoloRecebimentoRecursoWs } from "../definitions/ProtocoloRecebimentoRecursoWs";

export interface RecursoGlosaPort {
    tissRecursoGlosa_Operation(loteRecursoGlosaWs: LoteRecursoGlosaWs, callback: (err: any, result: ProtocoloRecebimentoRecursoWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
