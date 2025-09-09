import { SignedInfo } from "./SignedInfo";
import { KeyInfo } from "./KeyInfo";
import { Object } from "./Object";

/**
 * assinaturaDigitalGuia
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface AssinaturaDigitalGuia {
    /** SignedInfo */
    SignedInfo?: SignedInfo;
    /** base64Binary */
    SignatureValue?: string;
    /** KeyInfo */
    KeyInfo?: KeyInfo;
    /** Object */
    Object?: Object;
}
