import { EnvioDocumentoWs } from "../definitions/EnvioDocumentoWs";
import { ReciboDocumentosWs } from "../definitions/ReciboDocumentosWs";

export interface EnvioDocumentosPort {
    tissEnvioDocumentos_Operation(envioDocumentoWs: EnvioDocumentoWs, callback: (err: any, result: ReciboDocumentosWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
