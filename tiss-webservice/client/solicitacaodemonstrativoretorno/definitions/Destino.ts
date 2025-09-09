import { IdentificacaoPrestador1 } from "./IdentificacaoPrestador1";

/** destino */
export interface Destino {
    /** identificacaoPrestador */
    identificacaoPrestador?: IdentificacaoPrestador1;
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
}
