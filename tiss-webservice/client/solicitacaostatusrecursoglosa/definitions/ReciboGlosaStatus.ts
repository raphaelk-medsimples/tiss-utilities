import { DadosPrestador } from "./DadosPrestador";

/** reciboGlosaStatus */
export interface ReciboGlosaStatus {
    /** st_texto12|string|minLength,maxLength */
    nrProtocoloRecursoGlosa?: string;
    /** st_data|date */
    dataEnvioRecurso?: string;
    /** st_data|date */
    dataRecebimentoRecurso?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroLote?: string;
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_texto12|string|minLength,maxLength */
    nrProtocoloSituacaoRecursoGlosa?: string;
    /** st_data|date */
    dataSituacao?: string;
    /** dm_statusProtocolo|string|1,2,3,4,5,6,7,8,9 */
    situacaoProtocolo?: string;
}
