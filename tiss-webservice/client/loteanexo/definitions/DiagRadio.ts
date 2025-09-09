
/**
 * diagRadio
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DiagRadio {
    /** st_data|date */
    dataDiagnostico?: string;
    /** dm_diagnosticoCID10|string|minLength,maxLength,pattern */
    diagnosticoCID?: Array<string>;
    /** dm_estadiamento|string|0,1,2,3,4,5 */
    estadiamento?: string;
    /** dm_finalidadeTratamento|string|1,2,3,4,5 */
    finalidade?: string;
    /** dm_ecog|string|0,1,2,3,4 */
    ecog?: string;
    /** st_texto1000|string|minLength,maxLength */
    diagnosticoHispatologico?: string;
    /** st_texto1000|string|minLength,maxLength */
    infoRelevantes?: string;
}
