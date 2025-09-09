import { AnexosGuias } from "./AnexosGuias";

/**
 * loteAnexo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface LoteAnexo {
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** AnexosGuiasTISS */
    AnexosGuiasTISS?: AnexosGuias;
}
