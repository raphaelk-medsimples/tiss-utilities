
/**
 * dadosBeneficiario
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface DadosBeneficiario {
    /** st_texto20|string|minLength,maxLength */
    numeroCarteira?: string;
    /** dm_simNao|string|S,N */
    atendimentoRN?: string;
    /** dm_tipoIdent|ans:st_texto2|01,02,03,04,05,06,07,08,09 */
    tipoIdent?: string;
    /** base64Binary */
    identificadorBeneficiario?: string;
}
