import { Procedimento } from "./Procedimento";

/** opmeSolicitada */
export interface OpmeSolicitada {
    /** identificacaoOPME */
    identificacaoOPME?: Procedimento;
    /** dm_opcaoFabricante|string|1,2,3 */
    opcaoFabricante?: string;
    /** st_numerico3|integer|totalDigits */
    quantidadeSolicitada?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorSolicitado?: string;
    /** st_texto15|string|minLength,maxLength */
    registroANVISA?: string;
    /** st_texto60|string|minLength,maxLength */
    codigoRefFabricante?: string;
    /** st_texto30|string|minLength,maxLength */
    autorizacaoFuncionamento?: string;
}
