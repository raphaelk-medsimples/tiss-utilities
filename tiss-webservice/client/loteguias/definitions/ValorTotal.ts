
/**
 * valorTotal
 * @targetNSAlias `ans`
 * @targetNamespace `http://www.ans.gov.br/padroes/tiss/schemas`
 */
export interface ValorTotal {
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorProcedimentos?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorDiarias?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTaxasAlugueis?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorMateriais?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorMedicamentos?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorOPME?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorGasesMedicinais?: string;
    /** st_decimal10-2|decimal|fractionDigits,totalDigits */
    valorTotalGeral?: string;
}
