
/**
 * dadosSaidaInternacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosSaidaInternacao {
    /** st_texto4|string|minLength,maxLength */
    diagnostico?: Array<string>;
    /** dm_indicadorAcidente|string|0,1,2,9 */
    indicadorAcidente?: string;
    /** dm_motivoSaida|string|11,12,14,15,16,18,19,21,22,23,24,25,26,27,28,31,32,41,42,43,51,61,62,63,64,65,66,67 */
    motivoEncerramento?: string;
}
