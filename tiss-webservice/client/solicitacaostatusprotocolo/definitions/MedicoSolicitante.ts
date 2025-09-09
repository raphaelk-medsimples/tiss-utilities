
/**
 * medicoSolicitante
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface MedicoSolicitante {
    /** st_texto70|string|minLength,maxLength */
    nomeProfissional?: string;
    /** st_texto11|string|minLength,maxLength */
    telefoneProfissional?: string;
    /** st_texto60|string|minLength,maxLength */
    emailProfissional?: string;
}
