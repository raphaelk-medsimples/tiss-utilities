import { AnexosClinicos } from "./AnexosClinicos";

/**
 * detalheLoteAnexo
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DetalheLoteAnexo {
    /** dm_statusProtocolo|string|1,2,3,4,5,6,7,8,9 */
    statusProtocolo?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_data|date */
    dataEnvioLote?: string;
    /** anexosClinicos */
    anexosClinicos?: AnexosClinicos;
}
