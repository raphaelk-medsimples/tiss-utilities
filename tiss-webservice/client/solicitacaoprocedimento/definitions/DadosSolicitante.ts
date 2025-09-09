import { ContratadoSolicitante } from "./ContratadoSolicitante";
import { ProfissionalSolicitante } from "./ProfissionalSolicitante";

/** dadosSolicitante */
export interface DadosSolicitante {
    /** contratadoSolicitante */
    contratadoSolicitante?: ContratadoSolicitante;
    /** st_texto70|string|minLength,maxLength */
    nomeContratadoSolicitante?: string;
    /** profissionalSolicitante */
    profissionalSolicitante?: ProfissionalSolicitante;
}
