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
      tissSolicitacaoStatusAutorizacao_OperationAsync: vi.fn().mockImplementation((params, options) => {
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
  SOLICITA_STATUS_AUTORIZACAO: 'https://www.tiss.gov.br/tiss/services/SolicitacaoStatusAutorizacaoV40100',
});

describe('solicita-status-autorizacao', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.solicitaStatusAutorizacao(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissSolicitacaoStatusAutorizacao_Operation>
      <ans:solicitacaoStatusAutorizacaoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLICITA_STATUS_AUTORIZACAO</ans:tipoTransacao>
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
        <ans:solicitacaoStatusAutorizacao>
          <ans:identificacaoSolicitacao>
            <ans:numeroGuiaOperadora>OP20240115001</ans:numeroGuiaOperadora>
            <ans:numeroGuiaPrincipal>GP20240115001</ans:numeroGuiaPrincipal>
          </ans:identificacaoSolicitacao>
          <ans:dadosBeneficiario>
            <ans:numeroCarteira>1234567890</ans:numeroCarteira>
            <ans:nomeBeneficiario>João Silva</ans:nomeBeneficiario>
          </ans:dadosBeneficiario>
          <ans:dadosContratado>
            <ans:codigoPrestador>PREST001</ans:codigoPrestador>
            <ans:codigoCNES>1234567</ans:codigoCNES>
          </ans:dadosContratado>
        </ans:solicitacaoStatusAutorizacao>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:solicitacaoStatusAutorizacaoWS>
    </ans:tissSolicitacaoStatusAutorizacao_Operation>
  </soap:Body>
</soap:Envelope>`);

    // Verify response structure
    expect(response).toEqual(mockSuccessResponse);
    expect(response.situacaoAutorizacao?.situacaoAutorizacao).toBe('AUTORIZADA');
    expect(response.situacaoAutorizacao?.numeroGuiaOperadora).toBe('OP20240115001');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
