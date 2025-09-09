import { GuiaRecursoGlosaOdonto } from "./GuiaRecursoGlosaOdonto";
import { GuiaRecursoGlosa } from "./GuiaRecursoGlosa";

/**
 * loteRecurso
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface LoteRecurso {
    /** guiaRecursoGlosaOdonto */
    guiaRecursoGlosaOdonto?: GuiaRecursoGlosaOdonto;
    /** guiaRecursoGlosa */
    guiaRecursoGlosa?: GuiaRecursoGlosa;
}
