
/** dadosInternacao */
export interface DadosInternacao {
    /** dm_caraterAtendimento|string|1,2 */
    caraterAtendimento?: string;
    /** dm_tipoInternacao|string|1,2,3,4,5 */
    tipoInternacao?: string;
    /** dm_regimeInternacao|string|1,2,3 */
    regimeInternacao?: string;
    /** st_numerico2|integer|totalDigits */
    qtDiariasSolicitadas?: string;
    /** dm_simNao|string|S,N */
    indicadorOPME?: string;
    /** dm_simNao|string|S,N */
    indicadorQuimio?: string;
    /** st_texto500|string|minLength,maxLength */
    indicacaoClinica?: string;
}
