
/** dadosPagamento */
export interface DadosPagamento1 {
    /** st_data|date */
    dataPagamento?: string;
    /** st_texto4|string|minLength,maxLength */
    banco?: string;
    /** st_texto7|string|minLength,maxLength */
    agencia?: string;
    /** st_texto20|string|minLength,maxLength */
    conta?: string;
}
