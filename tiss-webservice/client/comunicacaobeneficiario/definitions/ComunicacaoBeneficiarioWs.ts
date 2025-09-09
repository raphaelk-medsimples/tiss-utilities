import { Cabecalho } from "./Cabecalho";
import { ComunicacaoBeneficiario } from "./ComunicacaoBeneficiario";
import { Signature } from "./Signature";

/** comunicacaoBeneficiarioWS */
export interface ComunicacaoBeneficiarioWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** comunicacaoBeneficiario */
    comunicacaoBeneficiario?: ComunicacaoBeneficiario;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: Signature;
}
