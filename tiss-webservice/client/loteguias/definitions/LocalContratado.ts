import { CodigoContratado } from "./CodigoContratado";

/** localContratado */
export interface LocalContratado {
    /** codigoContratado */
    codigoContratado?: CodigoContratado;
    /** st_texto70|string|minLength,maxLength */
    nomeContratado?: string;
    /** st_texto7|string|minLength,maxLength */
    cnes?: string;
}
