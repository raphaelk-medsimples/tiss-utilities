import { Cabecalho } from "./Cabecalho";
import { RespostaElegibilidade } from "./RespostaElegibilidade";
import { Signature } from "./Signature";

/** respostaElegibilidadeWS */
export interface RespostaElegibilidadeWs {
    /** cabecalho */
    cabecalho?: Cabecalho;
    /** respostaElegibilidade */
    respostaElegibilidade?: RespostaElegibilidade;
    /** string */
    hash?: string;
    /** Signatures */
    Signatures?: Signature;
}
