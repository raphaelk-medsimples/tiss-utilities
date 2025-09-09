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
      tissLoteAnexo_OperationAsync: vi.fn().mockImplementation((params, options) => {
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
  ENVIO_ANEXO: 'https://www.tiss.gov.br/tiss/services/LoteAnexoV40100',
});

describe('envio-anexo', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.envioAnexo(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissLoteAnexo_Operation>
      <ans:loteAnexoWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>ENVIO_ANEXO</ans:tipoTransacao>
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
        <ans:loteAnexo>
          <ans:numeroLote>LOTE_ANX_20240115001</ans:numeroLote>
          <ans:codigoPrestador>PREST001</ans:codigoPrestador>
          <ans:anexos>
            <ans:sequencialItem>1</ans:sequencialItem>
            <ans:numeroGuia>GP20240115001</ans:numeroGuia>
            <ans:tipoAnexo>DOCUMENTO</ans:tipoAnexo>
            <ans:nomeArquivo>anexo1.pdf</ans:nomeArquivo>
            <ans:conteudoArquivo>JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCg==</ans:conteudoArquivo>
          </ans:anexos>
        </ans:loteAnexo>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:loteAnexoWS>
    </ans:tissLoteAnexo_Operation>
  </soap:Body>
</soap:Envelope>`);
    expect(response).toEqual(mockSuccessResponse);
    expect(response.protocoloRecebimentoAnexo?.statusLote).toBe('RECEBIDO');
    expect(response.protocoloRecebimentoAnexo?.numeroLote).toBe('LOTE_ANX_20240115001');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
