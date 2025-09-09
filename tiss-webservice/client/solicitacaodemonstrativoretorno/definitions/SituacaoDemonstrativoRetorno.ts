import { DadosPrestador } from "./DadosPrestador";

/** situacaoDemonstrativoRetorno */
export interface SituacaoDemonstrativoRetorno {
    /** st_registroANS|string|maxLength,pattern */
    identificacaoOperadora?: string;
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_texto12|string|minLength,maxLength */
    numeroProtocolo?: string;
    /** st_texto12|string|minLength,maxLength */
    protocoloSolicitacaoDemonstrativo?: string;
    /** dm_tipoDemonstrativo|string|1,2,3 */
    tipoDemonstrativo?: string;
    /** st_data|date */
    dataSituacaoDemonstrativo?: string;
    /** dm_statusProtocolo|string|1,2,3,4,5,6,7,8,9 */
    situacaoDemonstrativo?: string;
}
