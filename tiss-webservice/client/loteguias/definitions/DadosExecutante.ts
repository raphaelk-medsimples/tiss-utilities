import { ContratadoSolicitante } from "./ContratadoSolicitante";

/** dadosExecutante */
export interface DadosExecutante {
    /** contratadoExecutante */
    contratadoExecutante?: ContratadoSolicitante;
    /** st_texto7|string|minLength,maxLength */
    CNES?: string;
}
