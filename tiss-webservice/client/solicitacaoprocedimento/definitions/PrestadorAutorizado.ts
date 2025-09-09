import { ContratadoSolicitante } from "./ContratadoSolicitante";

/** prestadorAutorizado */
export interface PrestadorAutorizado {
    /** dadosContratado */
    dadosContratado?: ContratadoSolicitante;
    /** st_texto7|string|minLength,maxLength */
    cnesContratado?: string;
}
