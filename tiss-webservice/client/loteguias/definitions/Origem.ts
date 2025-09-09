import { IdentificacaoPrestador } from "./IdentificacaoPrestador";

/** origem */
export interface Origem {
    /** identificacaoPrestador */
    identificacaoPrestador?: IdentificacaoPrestador;
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
}
