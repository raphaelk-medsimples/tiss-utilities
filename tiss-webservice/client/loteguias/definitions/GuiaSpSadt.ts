import { CabecalhoGuia } from "./CabecalhoGuia";
import { DadosAutorizacao } from "./DadosAutorizacao";
import { DadosBeneficiario } from "./DadosBeneficiario";
import { DadosSolicitante } from "./DadosSolicitante";
import { DadosSolicitacao } from "./DadosSolicitacao";
import { DadosExecutante } from "./DadosExecutante";
import { DadosAtendimento } from "./DadosAtendimento";
import { ProcedimentosExecutados } from "./ProcedimentosExecutados";
import { OutrasDespesas } from "./OutrasDespesas";
import { ValorTotal } from "./ValorTotal";
import { AssinaturaDigitalGuia } from "./AssinaturaDigitalGuia";

/**
 * guiaSP-SADT
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface GuiaSpSadt {
    /** cabecalhoGuia */
    cabecalhoGuia?: CabecalhoGuia;
    /** dadosAutorizacao */
    dadosAutorizacao?: DadosAutorizacao;
    /** dadosBeneficiario */
    dadosBeneficiario?: DadosBeneficiario;
    /** dadosSolicitante */
    dadosSolicitante?: DadosSolicitante;
    /** dadosSolicitacao */
    dadosSolicitacao?: DadosSolicitacao;
    /** dadosExecutante */
    dadosExecutante?: DadosExecutante;
    /** dadosAtendimento */
    dadosAtendimento?: DadosAtendimento;
    /** procedimentosExecutados */
    procedimentosExecutados?: ProcedimentosExecutados;
    /** outrasDespesas */
    outrasDespesas?: OutrasDespesas;
    /** st_texto500|string|minLength,maxLength */
    observacao?: string;
    /** valorTotal */
    valorTotal?: ValorTotal;
    /** assinaturaDigitalGuia */
    assinaturaDigitalGuia?: AssinaturaDigitalGuia;
}
