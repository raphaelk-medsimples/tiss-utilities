
/** loteCancelado */
export interface LoteCancelado {
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroprotocolo?: string;
    /** dm_statusCancelamento|string|maxLength,1,2,3,4,5,6 */
    statusCancelamento?: string;
}
