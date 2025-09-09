import { ComunicacaoBeneficiarioWs } from "../definitions/ComunicacaoBeneficiarioWs";
import { ReciboComunicacaoWs } from "../definitions/ReciboComunicacaoWs";

export interface ComunicacaoBeneficiarioPort {
    tissComunicacaoBeneficiario_Operation(comunicacaoBeneficiarioWs: ComunicacaoBeneficiarioWs, callback: (err: any, result: ReciboComunicacaoWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
