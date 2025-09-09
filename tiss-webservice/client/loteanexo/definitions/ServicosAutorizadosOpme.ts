import { Identificacao } from "./Identificacao";
import { MotivosNegativa1 } from "./MotivosNegativa1";

/** servicosAutorizadosOPME */
export interface ServicosAutorizadosOpme {
    /** st_numerico4|integer|totalDigits */
    sequencialItem?: string;
    /** procedimento */
    procedimento?: Identificacao;
    /** st_numerico3|integer|totalDigits */
    quantidadeSolicitada?: string;
    /** st_numerico3|integer|totalDigits */
    quantidadeAutorizada?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorSolicitado?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorAutorizado?: string;
    /** dm_opcaoFabricante|string|1,2,3 */
    opcaoFabricante?: string;
    /** st_texto15|string|minLength,maxLength */
    registroANVISA?: string;
    /** st_texto60|string|minLength,maxLength */
    codigoRefFabricante?: string;
    /** st_texto30|string|minLength,maxLength */
    autorizacaoFuncionamento?: string;
    /** motivosNegativa */
    motivosNegativa?: MotivosNegativa1;
}
