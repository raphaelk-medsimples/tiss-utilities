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
      tissSolicitacaoStatusProtocolo_OperationAsync: vi.fn().mockImplementation((params, options) => {
        // Return mocked SOAP response in the expected format: [result, rawResponse, soapHeader, rawRequest]
        return Promise.resolve([
          mockSuccessResponse,
          mockSoapResponse,
          { 'soap-header': 'mock-header' },
          expectedRequestXml
        ]);
      })
    });
  })
}));

const ws = new TissWebservice({
  SOLIC_STATUS_PROTOCOLO: 'https://www.tiss.gov.br/tiss/services/SolicitacaoStatusProtocoloV40100',
});

describe('solic-status-protocolo', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.solicStatusProtocolo(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissSolicitacaoStatusProtocolo_Operation>
      <ans:solicitacaoStatusProtocoloWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLIC_STATUS_PROTOCOLO</ans:tipoTransacao>
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
        <ans:solicitacaoStatusProtocolo>
          <ans:numeroProtocolo>PROT20240115001</ans:numeroProtocolo>
          <ans:codigoOperadora>67890</ans:codigoOperadora>
        </ans:solicitacaoStatusProtocolo>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:solicitacaoStatusProtocoloWS>
    </ans:tissSolicitacaoStatusProtocolo_Operation>
  </soap:Body>
</soap:Envelope>`);
    expect(response).toEqual(mockSuccessResponse);
    expect(response.situacaoProtocolo?.situacaoProtocolo).toBe('PROCESSADO');
    expect(response.situacaoProtocolo?.numeroProtocolo).toBe('PROT20240115001');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
