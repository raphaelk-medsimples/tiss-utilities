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
      tissRecursoGlosa_OperationAsync: vi.fn().mockImplementation((params, options) => {
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
  RECURSO_GLOSA: 'https://www.tiss.gov.br/tiss/services/RecursoGlosaV40100',
});

describe('recurso-glosa', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.recursoGlosa(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissRecursoGlosa_Operation>
      <ans:loteRecursoGlosaWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>RECURSO_GLOSA</ans:tipoTransacao>
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
        <ans:loteRecursoGlosa>
          <ans:numeroLote>LOTE_REC_20240115001</ans:numeroLote>
          <ans:codigoPrestador>PREST001</ans:codigoPrestador>
          <ans:dataEnvio>2024-01-15</ans:dataEnvio>
          <ans:recursos>
            <ans:numeroGuia>GP20240115001</ans:numeroGuia>
            <ans:codigoGlosa>1807</ans:codigoGlosa>
            <ans:descricaoRecurso>Procedimento realizado conforme protocolo médico</ans:descricaoRecurso>
            <ans:valorRecurso>150.00</ans:valorRecurso>
          </ans:recursos>
        </ans:loteRecursoGlosa>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:loteRecursoGlosaWS>
    </ans:tissRecursoGlosa_Operation>
  </soap:Body>
</soap:Envelope>`);
    expect(response).toEqual(mockSuccessResponse);
    expect(response.protocoloRecebimentoRecurso?.statusLote).toBe('RECEBIDO');
    expect(response.protocoloRecebimentoRecurso?.numeroLote).toBe('LOTE_REC_20240115001');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
