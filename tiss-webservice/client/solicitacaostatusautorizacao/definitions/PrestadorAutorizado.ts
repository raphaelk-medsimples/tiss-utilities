import { DadosContratado } from "./DadosContratado";

/** prestadorAutorizado */
export interface PrestadorAutorizado {
    /** dadosContratado */
    dadosContratado?: DadosContratado;
    /** st_texto7|string|minLength,maxLength */
    cnesContratado?: string;
}
