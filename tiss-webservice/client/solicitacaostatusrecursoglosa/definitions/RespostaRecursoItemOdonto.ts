import { RecursoProcedimento } from "./RecursoProcedimento";

/**
 * respostaRecursoItemOdonto
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface RespostaRecursoItemOdonto {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_texto20|string|minLength,maxLength */
    senha?: string;
    /** recursoProcedimento[] */
    recursoProcedimento?: Array<RecursoProcedimento>;
}
