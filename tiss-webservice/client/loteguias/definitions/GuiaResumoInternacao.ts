import { CabecalhoGuia1 } from "./CabecalhoGuia1";
import { DadosAutorizacao1 } from "./DadosAutorizacao1";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosExecutante1 } from "./DadosExecutante1";
import { DadosInternacao } from "./DadosInternacao";
import { DadosSaidaInternacao } from "./DadosSaidaInternacao";
import { ProcedimentosExecutados1 } from "./ProcedimentosExecutados1";
import { ValorTotal } from "./ValorTotal";
import { OutrasDespesas } from "./OutrasDespesas";
import { AssinaturaDigitalGuia } from "./AssinaturaDigitalGuia";

/**
 * guiaResumoInternacao
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface GuiaResumoInternacao {
    /** cabecalhoGuia */
    cabecalhoGuia?: CabecalhoGuia1;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaSolicitacaoInternacao?: string;
    /** dadosAutorizacao */
    dadosAutorizacao?: DadosAutorizacao1;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** dadosExecutante */
    dadosExecutante?: DadosExecutante1;
    /** dadosInternacao */
    dadosInternacao?: DadosInternacao;
    /** dadosSaidaInternacao */
    dadosSaidaInternacao?: DadosSaidaInternacao;
    /** procedimentosExecutados */
    procedimentosExecutados?: ProcedimentosExecutados1;
    /** valorTotal */
    valorTotal?: ValorTotal;
    /** outrasDespesas */
    outrasDespesas?: OutrasDespesas;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
    /** assinaturaDigitalGuia */
    assinaturaDigitalGuia?: AssinaturaDigitalGuia;
}
