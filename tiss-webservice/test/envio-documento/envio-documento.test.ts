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
      tissEnvioDocumentos_OperationAsync: vi.fn().mockImplementation((params, options) => {
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
  ENVIO_DOCUMENTO: 'https://www.tiss.gov.br/tiss/services/EnvioDocumentosV40100',
});

describe('envio-documento', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.envioDocumento(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissEnvioDocumentos_Operation>
      <ans:envioDocumentoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>ENVIO_DOCUMENTO</ans:tipoTransacao>
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
        <ans:envioDocumento>
          <ans:numeroProtocolo>PROT20240115001</ans:numeroProtocolo>
          <ans:numeroGuiaPrincipal>GP20240115001</ans:numeroGuiaPrincipal>
          <ans:numeroGuiaOperadora>OP20240115001</ans:numeroGuiaOperadora>
          <ans:tipoDocumento>1</ans:tipoDocumento>
          <ans:nomeArquivo>documento.pdf</ans:nomeArquivo>
          <ans:conteudoArquivo>JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCgoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKEhlbGxvIFdvcmxkKSBUagoKRVQKZW5kc3RyZWFtCmVuZG9iagoKNSAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTEKL0Jhc2VGb250IC9IZWx2ZXRpY2EKPj4KZW5kb2JqCgp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDAwOSAwMDAwMCBuCjAwMDAwMDAwNTggMDAwMDAgbgowMDAwMDAwMTE1IDAwMDAwIG4KMDAwMDAwMDIwNCAwMDAwMCBuCjAwMDAwMDAzMDEgMDAwMDAgbgp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjM2NQolJUVPRg==</ans:conteudoArquivo>
          <ans:dataEnvio>2024-01-15</ans:dataEnvio>
          <ans:observacao>Documento complementar da guia</ans:observacao>
        </ans:envioDocumento>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:envioDocumentoWS>
    </ans:tissEnvioDocumentos_Operation>
  </soap:Body>
</soap:Envelope>`);

    // Verify response structure
    expect(response).toEqual(mockSuccessResponse);
    expect(response.reciboDocumentos?.statusDocumento).toBe('RECEBIDO');
    expect(response.reciboDocumentos?.numeroProtocolo).toBe('PROT20240115001');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
