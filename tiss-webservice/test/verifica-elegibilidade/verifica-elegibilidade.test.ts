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
      tissVerificaElegibilidade_OperationAsync: vi.fn().mockImplementation((params, options) => {
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
  VERIFICA_ELEGIBILIDADE: 'https://www.tiss.gov.br/tiss/services/VerificaElegibilidadeV40100',
});

describe('verifica-elegibilidade', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.verificaElegibilidade(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissVerificaElegibilidade_Operation>
      <ans:pedidoElegibilidadeWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>VERIFICA_ELEGIBILIDADE</ans:tipoTransacao>
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
        <ans:pedidoElegibilidade>
          <ans:dadosPrestador>
            <ans:codigoPrestador>PREST001</ans:codigoPrestador>
            <ans:codigoCNES>1234567</ans:codigoCNES>
          </ans:dadosPrestador>
          <ans:numeroCarteira>1234567890</ans:numeroCarteira>
          <ans:tipoIdent>01</ans:tipoIdent>
          <ans:identificadorBeneficiario>MTIzNDU2Nzg5MA==</ans:identificadorBeneficiario>
          <ans:validadeCarteira>2024-12-31</ans:validadeCarteira>
          <ans:codValidacao>VAL123</ans:codValidacao>
        </ans:pedidoElegibilidade>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:pedidoElegibilidadeWS>
    </ans:tissVerificaElegibilidade_Operation>
  </soap:Body>
</soap:Envelope>`);

    // Verify response structure
    expect(response).toEqual(mockSuccessResponse);
    expect(response.respostaElegibilidade?.infoSaude?.statusElegibilidade).toBe('1');
    expect(response.respostaElegibilidade?.dadosBeneficiario?.numeroCarteira).toBe('1234567890');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
