import { DadosPagamento2 } from "./DadosPagamento2";

/** dadosPagamentoGuia */
export interface DadosPagamentoGuia {
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaOperadora?: string;
    /** dm_simNao|string|S,N */
    recurso?: string;
    /** st_texto70|string|minLength,maxLength */
    nomeExecutante?: string;
    /** st_texto20|string|minLength,maxLength */
    carteiraBeneficiario?: string;
    /** dadosPagamento[] */
    dadosPagamento?: Array<DadosPagamento2>;
    /** st_texto500|string|minLength,maxLength */
    observacaoGuia?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotalInformadoGuia?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotalProcessadoGuia?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotalGlosaGuia?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotalFranquiaGuia?: string;
    /** st_decimal8-2|decimal|totalDigits,fractionDigits */
    valorTotalLiberadoGuia?: string;
}
