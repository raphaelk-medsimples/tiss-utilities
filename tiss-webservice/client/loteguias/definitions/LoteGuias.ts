import { Guias } from "./Guias";

/**
 * loteGuias
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface LoteGuias {
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** guiasTISS */
    guiasTISS?: Guias;
}
