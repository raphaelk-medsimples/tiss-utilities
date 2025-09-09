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
      tissLoteGuias_OperationAsync: vi.fn().mockImplementation((params, options) => {
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
  ENVIO_LOTE_GUIAS: 'https://www.tiss.gov.br/tiss/services/LoteGuiasV40100',
});

describe('envio-lote-guias', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.envioLoteGuias(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissLoteGuias_Operation>
      <ans:loteGuiasWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>ENVIO_LOTE_GUIAS</ans:tipoTransacao>
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
        <ans:loteGuias>
          <ans:numeroLote>LOTE_GUI_20240115001</ans:numeroLote>
          <ans:codigoPrestador>PREST001</ans:codigoPrestador>
          <ans:quantidadeGuias>5</ans:quantidadeGuias>
          <ans:valorTotalLote>850.00</ans:valorTotalLote>
          <ans:dataEnvio>2024-01-15</ans:dataEnvio>
        </ans:loteGuias>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:loteGuiasWS>
    </ans:tissLoteGuias_Operation>
  </soap:Body>
</soap:Envelope>`);
    expect(response).toEqual(mockSuccessResponse);
    expect(response.protocoloRecebimento?.statusLote).toBe('RECEBIDO');
    expect(response.protocoloRecebimento?.numeroLote).toBe('LOTE_GUI_20240115001');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
