
/** cabecalhoGuia */
export interface CabecalhoGuia {
    /** st_registroANS|string|maxLength,pattern */
    registroANS?: string;
    /** st_texto20|string|minLength,maxLength */
    numeroGuiaPrestador?: string;
    /** st_texto20|string|minLength,maxLength */
    guiaPrincipal?: string;
}
