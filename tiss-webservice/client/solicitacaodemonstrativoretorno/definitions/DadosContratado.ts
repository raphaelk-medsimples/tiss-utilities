import { DadosPrestador } from "./DadosPrestador";

/** dadosContratado */
export interface DadosContratado {
    /** dadosPrestador */
    dadosPrestador?: DadosPrestador;
    /** st_texto7|string|minLength,maxLength */
    CNES?: string;
}
