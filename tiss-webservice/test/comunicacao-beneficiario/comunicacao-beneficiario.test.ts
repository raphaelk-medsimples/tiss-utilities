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
      tissComunicacaoBeneficiario_OperationAsync: vi.fn().mockImplementation((params, options) => {
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
  COMUNICACAO_BENEFICIARIO: 'https://www.tiss.gov.br/tiss/services/ComunicacaoBeneficiarioV40100',
});

describe('comunicacao-beneficiario', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    ws.clearCache();
  });

  test('should send correct XML request and parse response successfully', async () => {
    const [response, rawResponse, soapHeader, rawRequest] = 
      await ws.comunicacaoBeneficiario(Payload);

    expect(rawRequest.trim()).toBe(
`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ans="http://www.ans.gov.br/padroes/tiss/schemas">
  <soap:Body>
    <ans:tissComunicacaoBeneficiario_Operation>
      <ans:comunicacaoBeneficiarioWS>
        <ans:cabecalho>
          <ans:identificacaoTransacao>
            <ans:tipoTransacao>COMUNICACAO_BENEFICIARIO</ans:tipoTransacao>
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
        <ans:comunicacaoBeneficiario>
          <ans:numeroCarteira>1234567890</ans:numeroCarteira>
          <ans:nomeBeneficiario>João Silva</ans:nomeBeneficiario>
          <ans:tipoComunicacao>INCLUSAO</ans:tipoComunicacao>
          <ans:dataComunicacao>2024-01-15</ans:dataComunicacao>
          <ans:mensagem>Comunicação de inclusão de beneficiário no plano de saúde</ans:mensagem>
          <ans:dadosComplementares>Inclusão por admissão na empresa</ans:dadosComplementares>
        </ans:comunicacaoBeneficiario>
        <ans:hash>mock_hash_value_123456789</ans:hash>
      </ans:comunicacaoBeneficiarioWS>
    </ans:tissComunicacaoBeneficiario_Operation>
  </soap:Body>
</soap:Envelope>`);
    expect(response).toEqual(mockSuccessResponse);
    expect(response.reciboComunicacao?.statusComunicacao).toBe('RECEBIDA');
    expect(response.reciboComunicacao?.numeroCarteira).toBe('1234567890');
    expect(response.hash).toBe('mock_response_hash_987654321');
  });
});
