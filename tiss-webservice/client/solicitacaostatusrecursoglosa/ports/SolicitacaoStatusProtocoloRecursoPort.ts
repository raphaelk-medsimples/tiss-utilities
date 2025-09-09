import { SolicitacaoStatusRecursoGlosaWs } from "../definitions/SolicitacaoStatusRecursoGlosaWs";
import { SituacaoProtocoloRecursoWs } from "../definitions/SituacaoProtocoloRecursoWs";

export interface SolicitacaoStatusProtocoloRecursoPort {
    tissSolicitacaoStatusProtocoloRecurso_Operation(solicitacaoStatusRecursoGlosaWs: SolicitacaoStatusRecursoGlosaWs, callback: (err: any, result: SituacaoProtocoloRecursoWs, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
