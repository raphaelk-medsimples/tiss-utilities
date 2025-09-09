import { CodigoGlosa } from "./CodigoGlosa";
import { ReciboElegibilidade } from "./ReciboElegibilidade";

/**
 * respostaElegibilidade
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface RespostaElegibilidade {
    /** codigoGlosa */
    codigoGlosa?: CodigoGlosa;
    /** reciboElegibilidade */
    reciboElegibilidade?: ReciboElegibilidade;
}
