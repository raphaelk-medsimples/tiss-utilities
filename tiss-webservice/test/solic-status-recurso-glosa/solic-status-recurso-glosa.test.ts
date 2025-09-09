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
      tissSolicitacaoStatusRecursoGlosa_OperationAsync: vi.fn().mockImplementation((params, options) => {
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
  SOLIC_STATUS_RECURSO_GLOSA: 'https://www.tiss.gov.br/tiss/services/SolicitacaoStatusRecursoGlosaV40100',
});

describe('solic-status-recurso-glosa', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.solicStatusRecursoGlosa(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissSolicitacaoStatusRecursoGlosa_Operation>
      <ans:solicitacaoStatusRecursoGlosaWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>SOLIC_STATUS_RECURSO_GLOSA</ans:tipoTransacao>
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
        <ans:solicitacaoStatusRecursoGlosa>
          <ans:numeroProtocoloRecurso>PROT_REC_20240115001</ans:numeroProtocoloRecurso>
          <ans:codigoOperadora>67890</ans:codigoOperadora>
        </ans:solicitacaoStatusRecursoGlosa>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:solicitacaoStatusRecursoGlosaWS>
    </ans:tissSolicitacaoStatusRecursoGlosa_Operation>
  </soap:Body>
</soap:Envelope>`);
    expect(response).toEqual(mockSuccessResponse);
    expect(response.situacaoProtocoloRecurso?.situacaoProtocolo).toBe('ANALISADO');
    expect(response.situacaoProtocoloRecurso?.numeroProtocoloRecurso).toBe('PROT_REC_20240115001');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
