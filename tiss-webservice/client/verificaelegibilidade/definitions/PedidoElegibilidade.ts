import { DadosPrestador } from "./DadosPrestador";

/**
 * pedidoElegibilidade
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface PedidoElegibilidade {
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_texto20|string|minLength,maxLength */
    numeroCarteira?: string;
    /** dm_tipoIdent|ans:st_texto2|01,02,03,04,05,06,07,08,09 */
    tipoIdent?: string;
    /** base64Binary */
    identificadorBeneficiario?: string;
    /** st_data|date */
    validadeCarteira?: string;
    /** dm_ausenciaCodValidacao|string|01,02,03,04,05,06,07 */
    ausenciaCodValidacao?: string;
    /** st_texto10|string|minLength,maxLength */
    codValidacao?: string;
}
