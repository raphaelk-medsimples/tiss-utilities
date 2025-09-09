import { CancelaGuiaWs } from "../definitions/CancelaGuiaWs";
import { ReciboCancelaGuiaWs } from "../definitions/ReciboCancelaGuiaWs";

export interface CancelaGuiaPort {
    tissCancelaGuia_Operation(cancelaGuiaWs: CancelaGuiaWs, callback: (err: any, result: ReciboCancelaGuiaWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
