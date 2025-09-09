import { ValorTotalLote } from "./ValorTotalLote";
import { Guias } from "./Guias";

/**
 * detalheLote
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DetalheLote {
    /** dm_statusProtocolo|string|1,2,3,4,5,6,7,8,9 */
    statusProtocolo?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_data|date */
    dataEnvioLote?: string;
    /** valorTotalLote */
    valorTotalLote?: ValorTotalLote;
    /** guiasTISS */
    guiasTISS?: Guias;
}
