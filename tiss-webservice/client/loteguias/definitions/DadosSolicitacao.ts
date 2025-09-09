
/** dadosSolicitacao */
export interface DadosSolicitacao {
    /** st_data|date */
    dataSolicitacao?: string;
    /** dm_caraterAtendimento|string|1,2 */
    caraterAtendimento?: string;
    /** st_texto500|string|minLength,maxLength */
    indicacaoClinica?: string;
    /** dm_cobEsp|string|maxLength,01,02,03 */
    indCobEspecial?: string;
}
