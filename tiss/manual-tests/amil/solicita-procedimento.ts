const ENDPOINT = 'https://api.servicos.grupoamil.com.br/api-tiss-solicitacao-procedimento/v4.01.00';

const data = {
   cabecalho: {
     versaoTISS: "4.01.00",
     registroANS: "326305",
     tipoTransacao: "SOLICITACAO_PROCEDIMENTOS",
     codigoPrestador: "70434816",
     senhaPrestador: "Okdjdk22--",
   },
   solicitacaoProcedimento: {
     "solicitacaoSP-SADT": {
       cabecalhoSolicitacao: {
         registroANS: "326305",
         numeroGuiaPrestador: new Date().getTime() + "",
       },
       tipoEtapaAutorizacao: "1",
       dadosBeneficiario: {
         numeroCarteira: "093897586",
         atendimentoRN: "N",
         tipoIdent: "03",
       },
       caraterAtendimento: "1",
       dataSolicitacao: new Date().toISOString().split("T")[0],
       dadosSolicitante: {
         contratadoSolicitante: { codigoPrestadorNaOperadora: "70434816" },
         nomeContratadoSolicitante: "MRSPF CLINICA MEDICA LTDA",
         profissionalSolicitante: {
            nomeProfissional: "Felipe Henrique Yazawa Santos",
            conselhoProfissional: "06",
            numeroConselhoProfissional: "176861",
            UF: "35",
            CBOS: "225135",
          },
       },
       procedimentosSolicitados: [
         {
           procedimento: {
             codigoTabela: "22",
             codigoProcedimento: "10101012",
             descricaoProcedimento:
               "Consulta em consultório (no horário normal ou preestabelecido)",
           },
           quantidadeSolicitada: "1",
         },
       ],
       dadosExecutante: {
         codigonaOperadora: "70434816",
         CNES: "2998386",
       },
     },
   },
 };