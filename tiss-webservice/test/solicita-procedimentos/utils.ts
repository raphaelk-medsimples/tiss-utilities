import type { SolicitacaoProcedimentoWs } from '../../client/solicitacaoprocedimento/definitions/SolicitacaoProcedimentoWs';

export const mockPayload: SolicitacaoProcedimentoWs = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLICITACAO_PROCEDIMENTO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    },
    origem: {
      codigoOperadora: '12345',
      codigoRegistro: 'REG001'
    },
    destino: {
      codigoOperadora: '67890',
      codigoRegistro: 'REG002'
    },
    Padrao: '4.00.00',
    loginSenhaPrestador: {
      loginPrestador: 'user123',
      senhaPrestador: 'pass123'
    }
  },
  solicitacaoProcedimento: {
    'solicitacaoSP-SADT': {
      cabecalhoSolicitacao: {
        registroANS: '123456',
        numeroGuiaSolicitacao: 'GS20240115001'
      },
      numeroGuiaPrincipal: 'GP20240115001',
      tipoEtapaAutorizacao: '1',
      dadosBeneficiario: {
        numeroCarteira: '1234567890',
        atendimentoRN: 'S',
        nomeBeneficiario: 'João Silva'
      },
      dadosSolicitante: {
        codigoPrestadorSolicitante: 'PREST001',
        nomePrestadorSolicitante: 'Dr. Maria Santos',
        conselhoProfissional: '1',
        numeroConselhoProfissional: '12345-SP',
        UF: 'SP',
        codigoCBOS: '225125'
      },
      caraterAtendimento: '1',
      dataSolicitacao: '2024-01-15',
      indicacaoClinica: 'Exame de rotina solicitado',
      procedimentosSolicitados: [
        {
          procedimento: {
            codigoTabela: '22',
            codigoProcedimento: '40101012',
            descricaoProcedimento: 'Consulta médica'
          },
          quantidadeSolicitada: '1'
        }
      ],
      dadosExecutante: {
        codigoPrestadorExecutante: 'EXEC001',
        nomePrestadorExecutante: 'Clínica São Paulo',
        codigoCNES: '1234567'
      },
      observacao: 'Solicitação para exame de rotina'
    }
  },
  hash: 'mock_hash_value_123456789'
};

export const mockSuccessResponse = {
  cabecalho: {
    identificacaoTransacao: {
      tipoTransacao: 'SOLICITACAO_PROCEDIMENTO',
      sequencialTransacao: '123456789',
      dataRegistroTransacao: '2024-01-15'
    }
  },
  autorizacaoProcedimento: {
    numeroGuiaOperadora: 'OP20240115001',
    numeroGuiaPrincipal: 'GP20240115001',
    dadosBeneficiario: {
      numeroCarteira: '1234567890',
      nomeBeneficiario: 'João Silva'
    },
    dadosSolicitante: {
      codigoPrestadorSolicitante: 'PREST001',
      nomePrestadorSolicitante: 'Dr. Maria Santos'
    },
    dadosAutorizacao: {
      numeroGuiaAutorizacao: 'AUTH20240115001',
      dataAutorizacao: '2024-01-15',
      validadeAutorizacao: '2024-02-15'
    },
    procedimentosAutorizados: [
      {
        sequencialItem: '1',
        procedimento: {
          codigoTabela: '22',
          codigoProcedimento: '40101012',
          descricaoProcedimento: 'Consulta médica'
        },
        quantidadeAutorizada: '1',
        valorAutorizado: '85.00'
      }
    ]
  },
  hash: 'mock_response_hash_987654321'
};

export const mockSoapResponse = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ans:tissAutorizacaoProcedimento_OperationResponse xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
      <ans:autorizacaoProcedimentoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLICITACAO_PROCEDIMENTO</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
        </ans:cabecalho>
        <ans:autorizacaoProcedimento>
          <ans:numeroGuiaOperadora>OP20240115001</ans:numeroGuiaOperadora>
          <ans:numeroGuiaPrincipal>GP20240115001</ans:numeroGuiaPrincipal>
          <ans:dadosAutorizacao>
            <ans:numeroGuiaAutorizacao>AUTH20240115001</ans:numeroGuiaAutorizacao>
            <ans:dataAutorizacao>2024-01-15</ans:dataAutorizacao>
            <ans:validadeAutorizacao>2024-02-15</ans:validadeAutorizacao>
          </ans:dadosAutorizacao>
        </ans:autorizacaoProcedimento>
        <ans:hash>mock_response_hash_987654321</ans:hash>
      </ans:autorizacaoProcedimentoWS>
    </ans:tissAutorizacaoProcedimento_OperationResponse>
  </soap:Body>
</soap:Envelope>`;

export { mockPayload as Payload };
