import { PeriodoProc } from "./PeriodoProc";

/** cabecalhoDemonstrativoOdonto */
export interface CabecalhoDemonstrativoOdonto {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto12|string|minLength,maxLength */
    numeroDemonstrativo?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeOperadora?: string;
    /** st_CNPJ|string|pattern */
    cnpjOper?: string;
    /** periodoProc */
    periodoProc?: PeriodoProc;
}
