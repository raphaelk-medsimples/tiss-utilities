
/** dadosGuia */
export interface DadosGuia {
    /** dm_tipoGuia|string|1,2,3 */
    tipoGuia?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** dm_statusCancelamento|string|maxLength,1,2,3,4,5,6 */
    statusCancelamento?: string;
}
