import { ContratadoSolicitante } from "./ContratadoSolicitante";
import { ProfissionalSolicitante } from "./ProfissionalSolicitante";

/** identificacaoSolicitante */
export interface IdentificacaoSolicitante {
    /** dadosDoContratado */
    dadosDoContratado?: ContratadoSolicitante;
    /** dadosProfissionalContratado */
    dadosProfissionalContratado?: ProfissionalSolicitante;
}
