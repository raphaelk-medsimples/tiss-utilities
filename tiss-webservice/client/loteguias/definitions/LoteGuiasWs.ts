import { Cabecalho } from "./Cabecalho";
import { LoteGuias } from "./LoteGuias";
import { AssinaturaDigitalGuia } from "./AssinaturaDigitalGuia";

/** loteGuiasWS */
export interface LoteGuiasWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** loteGuias */
    loteGuias?: LoteGuias;
    /** string */
    hash?: string;
    /** Signature */
    Signature?: AssinaturaDigitalGuia;
}
