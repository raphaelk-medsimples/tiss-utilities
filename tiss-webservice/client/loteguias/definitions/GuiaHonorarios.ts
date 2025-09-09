import { CabecalhoGuia1 } from "./CabecalhoGuia1";
import { Beneficiario } from "./Beneficiario";
import { LocalContratado } from "./LocalContratado";
import { DadosContratadoExecutante } from "./DadosContratadoExecutante";
import { DadosInternacao1 } from "./DadosInternacao1";
import { ProcedimentosRealizados } from "./ProcedimentosRealizados";
import { AssinaturaDigitalGuia } from "./AssinaturaDigitalGuia";

/**
 * guiaHonorarios
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface GuiaHonorarios {
    /** cabecalhoGuia */
    cabecalhoGuia?: CabecalhoGuia1;
    /** st_texto20|string|minLength,maxLength */
    guiaSolicInternacao?: string;
    /** st_texto20|string|minLength,maxLength */
    senha?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** beneficiario */
    beneficiario?: Beneficiario;
    /** localContratado */
    localContratado?: LocalContratado;
    /** dadosContratadoExecutante */
    dadosContratadoExecutante?: DadosContratadoExecutante;
    /** dadosInternacao */
    dadosInternacao?: DadosInternacao1;
    /** procedimentosRealizados */
    procedimentosRealizados?: ProcedimentosRealizados;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalHonorarios?: string;
    /** st_data|date */
    dataEmissaoGuia?: string;
    /** assinaturaDigitalGuia */
    assinaturaDigitalGuia?: AssinaturaDigitalGuia;
}
