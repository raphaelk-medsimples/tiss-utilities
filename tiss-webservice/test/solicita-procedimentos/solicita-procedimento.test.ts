import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest';
import { Payload, mockSuccessResponse, mockSoapResponse } from './utils';
import { TissWebservice } from '../../tiss-webservice';
import fs from 'fs';
import path from 'path';

const expectedRequestXml = fs.readFileSync(path.join(__dirname, 'fixtures', 'sucesso', 'request.xml'), 'utf8');

// Mock the soap module
vi.mock('soap', () => ({
  createClientAsync: vi.fn().mockImplementation((url: string) => {
    return Promise.resolve({
      tissSolicitacaoProcedimento_OperationAsync: vi.fn().mockImplementation((params, options) => {
        // Capture the request for validation
        const capturedRequest = {
          params,
          options,
          url
        };
        
        // Return mocked SOAP response in the expected format: [result, rawResponse, soapHeader, rawRequest]
        return Promise.resolve([
          mockSuccessResponse,
          mockSoapResponse,
          { 'soap-header': 'mock-header' },
          expectedRequestXml  // This simulates the raw XML request that would be sent
        ]);
      })
    });
  })
}));

const ws = new TissWebservice({
  SOLICITACAO_PROCEDIMENTOS: 'https://www.tiss.gov.br/tiss/services/SolicitacaoProcedimentoV40100',
});

describe('solicita-procedimento', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.solicitacaoProcedimentos(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissSolicitacaoProcedimento_Operation>
      <ans:solicitacaoProcedimentoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLICITACAO_PROCEDIMENTO</ans:tipoTransacao>
            <ans:sequencialTransacao>123456789</ans:sequencialTransacao>
            <ans:dataRegistroTransacao>2024-01-15</ans:dataRegistroTransacao>
          </ans:identificacaoTransacao>
          <ans:origem>
            <ans:codigoOperadora>12345</ans:codigoOperadora>
            <ans:codigoRegistro>REG001</ans:codigoRegistro>
          </ans:origem>
          <ans:destino>
            <ans:codigoOperadora>67890</ans:codigoOperadora>
            <ans:codigoRegistro>REG002</ans:codigoRegistro>
          </ans:destino>
          <ans:Padrao>4.00.00</ans:Padrao>
          <ans:loginSenhaPrestador>
            <ans:loginPrestador>user123</ans:loginPrestador>
            <ans:senhaPrestador>pass123</ans:senhaPrestador>
          </ans:loginSenhaPrestador>
        </ans:cabecalho>
        <ans:solicitacaoProcedimento>
          <ans:solicitacaoSP-SADT>
            <ans:cabecalhoSolicitacao>
              <ans:registroANS>123456</ans:registroANS>
              <ans:numeroGuiaSolicitacao>GS20240115001</ans:numeroGuiaSolicitacao>
            </ans:cabecalhoSolicitacao>
            <ans:numeroGuiaPrincipal>GP20240115001</ans:numeroGuiaPrincipal>
            <ans:tipoEtapaAutorizacao>1</ans:tipoEtapaAutorizacao>
            <ans:dadosBeneficiario>
              <ans:numeroCarteira>1234567890</ans:numeroCarteira>
              <ans:atendimentoRN>S</ans:atendimentoRN>
              <ans:nomeBeneficiario>João Silva</ans:nomeBeneficiario>
            </ans:dadosBeneficiario>
            <ans:dadosSolicitante>
              <ans:codigoPrestadorSolicitante>PREST001</ans:codigoPrestadorSolicitante>
              <ans:nomePrestadorSolicitante>Dr. Maria Santos</ans:nomePrestadorSolicitante>
              <ans:conselhoProfissional>1</ans:conselhoProfissional>
              <ans:numeroConselhoProfissional>12345-SP</ans:numeroConselhoProfissional>
              <ans:UF>SP</ans:UF>
              <ans:codigoCBOS>225125</ans:codigoCBOS>
            </ans:dadosSolicitante>
            <ans:caraterAtendimento>1</ans:caraterAtendimento>
            <ans:dataSolicitacao>2024-01-15</ans:dataSolicitacao>
            <ans:indicacaoClinica>Exame de rotina solicitado</ans:indicacaoClinica>
            <ans:procedimentosSolicitados>
              <ans:procedimento>
                <ans:codigoTabela>22</ans:codigoTabela>
                <ans:codigoProcedimento>40101012</ans:codigoProcedimento>
                <ans:descricaoProcedimento>Consulta médica</ans:descricaoProcedimento>
              </ans:procedimento>
              <ans:quantidadeSolicitada>1</ans:quantidadeSolicitada>
            </ans:procedimentosSolicitados>
            <ans:dadosExecutante>
              <ans:codigoPrestadorExecutante>EXEC001</ans:codigoPrestadorExecutante>
              <ans:nomePrestadorExecutante>Clínica São Paulo</ans:nomePrestadorExecutante>
              <ans:codigoCNES>1234567</ans:codigoCNES>
            </ans:dadosExecutante>
            <ans:observacao>Solicitação para exame de rotina</ans:observacao>
          </ans:solicitacaoSP-SADT>
        </ans:solicitacaoProcedimento>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:solicitacaoProcedimentoWS>
    </ans:tissSolicitacaoProcedimento_Operation>
  </soap:Body>
</soap:Envelope>`);

  });
});
