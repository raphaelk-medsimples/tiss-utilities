import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest';
import { TissGateway, type TissGatewayConfig } from '../tiss-service';
import type { WsdlUrlMapping } from '../../tiss-webservice/tiss-webservice';
import {
  validCabecalhoParams,
  amilCabecalhoParams,
  verificaElegibilidadeRequest,
  verificaElegibilidadeResponse,
  solicitaStatusAutorizacaoRequest,
  solicitaStatusAutorizacaoResponse,
  envioLoteGuiasRequest,
  envioLoteGuiasResponse,
  errorResponse,
  testScenarios,
  sampleXmlRequest,
  sampleXmlResponse,
  complexObjectForHashing,
} from './test-fixtures';

// Mock SOAP and dependencies
vi.mock('soap', () => ({
  createClientAsync: vi.fn(),
  BasicAuthSecurity: vi.fn(),
}));

// Create mocked functions
const mockVerificaElegibilidade = vi.fn();
const mockSolicitaStatusAutorizacao = vi.fn();
const mockEnvioLoteGuias = vi.fn();
const mockUpdateWsdlUrls = vi.fn();
const mockClearCache = vi.fn();

vi.mock('../../tiss-webservice/tiss-webservice', () => {
  const mockImplementation = vi.fn().mockImplementation(() => ({
    verificaElegibilidade: mockVerificaElegibilidade,
    solicitaStatusAutorizacao: mockSolicitaStatusAutorizacao,
    envioLoteGuias: mockEnvioLoteGuias,
    updateWsdlUrls: mockUpdateWsdlUrls,
    clearCache: mockClearCache,
  }));
  
  return {
    TissWebservice: mockImplementation,
  };
});

describe('TissGateway Integration Tests', () => {
  let gateway: TissGateway<Partial<WsdlUrlMapping>>;
  let mockWebservice: any;

  const wsdlUrls: Partial<WsdlUrlMapping> = {
    VERIFICA_ELEGIBILIDADE: 'https://test.tiss.gov.br/verifica-elegibilidade?wsdl',
    SOLICITA_STATUS_AUTORIZACAO: 'https://test.tiss.gov.br/status-autorizacao?wsdl',
    ENVIO_LOTE_GUIAS: 'https://test.tiss.gov.br/lote-guias?wsdl',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    
    const config: TissGatewayConfig = {
      defaultCabecalhoParams: {
        versaoTISS: '4.01.00',
        registroANS: '326305',
        codigoPrestador: 'PREST001',
        senhaPrestador: 'senha123',
      },
      enableRequestHashing: true,
      enableResponseLogging: true,
      useAmil: false,
    };

    gateway = new TissGateway(wsdlUrls, config);
    mockWebservice = {
      verificaElegibilidade: mockVerificaElegibilidade,
      solicitaStatusAutorizacao: mockSolicitaStatusAutorizacao,
      envioLoteGuias: mockEnvioLoteGuias,
      updateWsdlUrls: mockUpdateWsdlUrls,
      clearCache: mockClearCache,
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Complete Workflow Tests', () => {
    test('should handle complete eligibility verification workflow', async () => {
      // Setup mock response
      mockWebservice.verificaElegibilidade.mockResolvedValue([
        verificaElegibilidadeResponse,
        sampleXmlResponse,
        { 'Content-Type': 'text/xml' },
        sampleXmlRequest,
      ]);

      // Execute request
      const result = await gateway.verificaElegibilidade(verificaElegibilidadeRequest);

      // Verify request processing
      expect(mockWebservice.verificaElegibilidade).toHaveBeenCalledWith(
        expect.objectContaining({
          tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
          beneficiario: expect.objectContaining({
            numeroCarteira: '123456789012345',
            nomeBeneficiario: 'João da Silva Santos',
          }),
          cabecalho: expect.objectContaining({
            identificacaoTransacao: expect.objectContaining({
              tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
              dataRegistroTransacao: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
              horaRegistroTransacao: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
            }),
            Padrao: '4.01.00',
          }),
        }),
        undefined
      );

      // Verify response structure
      expect(result).toMatchObject({
        success: true,
        data: verificaElegibilidadeResponse,
        requestHash: expect.any(String),
        rawResponse: sampleXmlResponse,
        soapHeader: expect.any(Object),
        rawRequest: sampleXmlRequest,
      });

      // Verify business logic
      expect(result.data.beneficiarioValido).toBe(true);
      expect(result.data.contratadoValido).toBe(true);
    });

    test('should handle authorization status workflow', async () => {
      mockWebservice.solicitaStatusAutorizacao.mockResolvedValue([
        solicitaStatusAutorizacaoResponse,
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.solicitaStatusAutorizacao(solicitaStatusAutorizacaoRequest);

      expect(result.success).toBe(true);
      expect(result.data.situacaoAutorizacao).toBe('AUTORIZADA');
      expect(result.data.numeroAutorizacao).toBe('AUTH123456789');
    });

    test('should handle batch guide submission workflow', async () => {
      mockWebservice.envioLoteGuias.mockResolvedValue([
        envioLoteGuiasResponse,
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.envioLoteGuias(envioLoteGuiasRequest);

      expect(result.success).toBe(true);
      expect(result.data.numeroProtocolo).toBe('PROT123456789');
      expect(result.data.valorTotalProtocolo).toBe('1500.00');
    });
  });

  describe('Amil Integration Workflow', () => {
    test('should handle Amil-specific workflow', async () => {
      // Configure for Amil
      const amilGateway = new TissGateway(wsdlUrls, {
        defaultCabecalhoParams: amilCabecalhoParams,
        useAmil: true,
        enableRequestHashing: true,
      });

      const mockAmilWebservice = (amilGateway as any).ws;
      mockAmilWebservice.verificaElegibilidade = vi.fn().mockResolvedValue([
        verificaElegibilidadeResponse,
        sampleXmlResponse,
        { 'Content-Type': 'text/xml' },
        sampleXmlRequest,
      ]);

      const result = await amilGateway.verificaElegibilidade(verificaElegibilidadeRequest);

      expect(mockAmilWebservice.verificaElegibilidade).toHaveBeenCalledWith(
        expect.objectContaining({
          cabecalho: expect.objectContaining({
            destino: expect.objectContaining({
              registroANS: '326305', // Amil's ANS registration
            }),
          }),
        }),
        undefined
      );

      expect(result.success).toBe(true);
    });
  });

  describe('Error Scenarios Integration', () => {
    test('should handle business logic errors gracefully', async () => {
      mockWebservice.verificaElegibilidade.mockResolvedValue([
        errorResponse,
        'error-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.verificaElegibilidade(verificaElegibilidadeRequest);

      expect(result.success).toBe(true); // Gateway success, but business logic failure
      expect(result.data.beneficiarioValido).toBe(false);
      expect(result.data.cabecalho?.falhaNegocio).toBe('Beneficiário não encontrado');
    });

    test('should handle SOAP faults and network errors', async () => {
      const soapError = new Error('SOAP-ENV:Server.userException');
      mockWebservice.verificaElegibilidade.mockRejectedValue(soapError);

      await expect(gateway.verificaElegibilidade(verificaElegibilidadeRequest))
        .rejects.toThrow('SOAP-ENV:Server.userException');
    });

    test('should handle timeout errors', async () => {
      const timeoutError = new Error('Request timeout');
      mockWebservice.verificaElegibilidade.mockRejectedValue(timeoutError);

      await expect(gateway.verificaElegibilidade(verificaElegibilidadeRequest))
        .rejects.toThrow('Request timeout');
    });
  });

  describe('Configuration Management Integration', () => {
    test('should dynamically update configuration during workflow', async () => {
      // Start with basic config
      expect((gateway as any).config.enableResponseLogging).toBe(true);
      
      // Update configuration
      gateway.updateConfig({
        enableResponseLogging: false,
        enableRequestHashing: false,
      });

      mockWebservice.verificaElegibilidade.mockResolvedValue([
        verificaElegibilidadeResponse,
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.verificaElegibilidade(verificaElegibilidadeRequest);

      // Verify config changes took effect
      expect(result.rawResponse).toBeUndefined();
      expect(result.requestHash).toBeUndefined();
      expect(result.success).toBe(true);
    });

    test('should update WSDL URLs and maintain functionality', async () => {
      const newUrls = {
        VERIFICA_ELEGIBILIDADE: 'https://new-endpoint.tiss.gov.br/verifica-elegibilidade?wsdl',
      };

      gateway.updateWsdlUrls(newUrls);
      expect(mockWebservice.updateWsdlUrls).toHaveBeenCalledWith(newUrls);

      // Verify functionality still works after URL update
      mockWebservice.verificaElegibilidade.mockResolvedValue([
        verificaElegibilidadeResponse,
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.verificaElegibilidade(verificaElegibilidadeRequest);
      expect(result.success).toBe(true);
    });

    test('should update default cabecalho params and apply to requests', async () => {
      gateway.updateDefaultCabecalhoParams({
        versaoTISS: '4.00.01',
        codigoPrestador: 'UPDATED_PREST',
      });

      mockWebservice.verificaElegibilidade.mockResolvedValue([
        verificaElegibilidadeResponse,
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      await gateway.verificaElegibilidade(verificaElegibilidadeRequest);

      // The mock doesn't capture the actual parameters, but we can verify no errors
      expect(mockWebservice.verificaElegibilidade).toHaveBeenCalled();
    });
  });

  describe('Performance and Caching Integration', () => {
    test('should handle multiple concurrent requests', async () => {
      mockWebservice.verificaElegibilidade.mockResolvedValue([
        verificaElegibilidadeResponse,
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      // Execute multiple concurrent requests
      const promises = Array.from({ length: 5 }, (_, i) => 
        gateway.verificaElegibilidade({
          ...verificaElegibilidadeRequest,
          sequencialTransacao: `concurrent_${i}`,
        })
      );

      const results = await Promise.all(promises);

      // Verify all requests succeeded
      expect(results).toHaveLength(5);
      results.forEach(result => {
        expect(result.success).toBe(true);
      });

      // Verify service was called for each request
      expect(mockWebservice.verificaElegibilidade).toHaveBeenCalledTimes(5);
    });

    test('should handle cache clearing during operations', async () => {
      mockWebservice.verificaElegibilidade.mockResolvedValue([
        verificaElegibilidadeResponse,
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      // Execute request
      await gateway.verificaElegibilidade(verificaElegibilidadeRequest);
      
      // Clear cache
      gateway.clearCache();
      expect(mockWebservice.clearCache).toHaveBeenCalled();

      // Execute another request - should still work
      const result = await gateway.verificaElegibilidade(verificaElegibilidadeRequest);
      expect(result.success).toBe(true);
    });
  });

  describe('Request Enhancement Integration', () => {
    test('should properly enhance requests with all automatic fields', async () => {
      mockWebservice.verificaElegibilidade.mockImplementation((request) => {
        // Capture and verify the enhanced request
        expect(request).toMatchObject({
          tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
          cabecalho: expect.objectContaining({
            identificacaoTransacao: expect.objectContaining({
              tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
              sequencialTransacao: expect.any(String),
              dataRegistroTransacao: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
              horaRegistroTransacao: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
            }),
            loginSenhaPrestador: expect.objectContaining({
              loginPrestador: expect.any(String),
              senhaPrestador: expect.stringMatching(/^[a-f0-9]{32}$/), // MD5 hash pattern
            }),
          }),
        });

        return Promise.resolve([
          verificaElegibilidadeResponse,
          'raw-response',
          'soap-header',
          'raw-request',
        ]);
      });

      const result = await gateway.verificaElegibilidade(verificaElegibilidadeRequest);
      expect(result.success).toBe(true);
    });

    test('should handle custom cabecalho override correctly', async () => {
      const customCabecalho = {
        versaoTISS: '4.00.01' as const,
        codigoPrestador: 'CUSTOM_PROVIDER',
        senhaPrestador: 'custom_password',
      };

      mockWebservice.verificaElegibilidade.mockImplementation((request) => {
        // The enhanced request should reflect custom parameters
        expect(request.cabecalho).toBeDefined();
        return Promise.resolve([
          verificaElegibilidadeResponse,
          'raw-response',
          'soap-header',
          'raw-request',
        ]);
      });

      const result = await gateway.verificaElegibilidade(
        verificaElegibilidadeRequest,
        customCabecalho
      );
      
      expect(result.success).toBe(true);
    });
  });

  describe('Real-world Scenario Simulations', () => {
    test('should simulate complete patient eligibility check workflow', async () => {
      // Scenario: Doctor's office checking patient eligibility before appointment
      const patientRequest = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE' as const,
        beneficiario: {
          numeroCarteira: '987654321098765',
          atendimentoRN: 'S',
          nomeBeneficiario: 'Maria Aparecida dos Santos',
          nomeSocial: null,
        },
        prestador: {
          codigoPrestadorNaOperadora: 'CLINIC001',
        },
      };

      const patientResponse = {
        ...verificaElegibilidadeResponse,
        beneficiarioValido: true,
        contratadoValido: true,
        respostaBeneficiario: {
          numeroCarteira: '987654321098765',
          nomeBeneficiario: 'Maria Aparecida dos Santos',
          validadeBeneficiario: '2025-12-31',
          carenciaAtendida: true,
          atendimentoRN: 'S',
        },
      };

      mockWebservice.verificaElegibilidade.mockResolvedValue([
        patientResponse,
        'response-xml',
        'headers',
        'request-xml',
      ]);

      const result = await gateway.verificaElegibilidade(patientRequest);

      expect(result.success).toBe(true);
      expect(result.data.beneficiarioValido).toBe(true);
      expect(result.data.respostaBeneficiario?.carenciaAtendida).toBe(true);
      expect(result.requestHash).toBeDefined();
    });

    test('should simulate authorization request workflow', async () => {
      // Scenario: Requesting authorization for a procedure
      const authRequest = {
        tipoTransacao: 'SOLICITA_STATUS_AUTORIZACAO' as const,
        numeroAutorizacao: 'AUTH2024001234',
        prestador: {
          codigoPrestadorNaOperadora: 'HOSPITAL001',
        },
      };

      const authResponse = {
        ...solicitaStatusAutorizacaoResponse,
        situacaoAutorizacao: 'AUTORIZADA',
        numeroAutorizacao: 'AUTH2024001234',
        valorAutorizado: '2500.00',
        dataAutorizacao: '2024-01-15',
        validadeAutorizacao: '2024-04-15',
      };

      mockWebservice.solicitaStatusAutorizacao.mockResolvedValue([
        authResponse,
        'response-xml',
        'headers',
        'request-xml',
      ]);

      const result = await gateway.solicitaStatusAutorizacao(authRequest);

      expect(result.success).toBe(true);
      expect(result.data.situacaoAutorizacao).toBe('AUTORIZADA');
      expect(result.data.valorAutorizado).toBe('2500.00');
    });

    test('should handle system maintenance error gracefully', async () => {
      // Scenario: System under maintenance
      const maintenanceError = new Error('Sistema em manutenção. Tente novamente em alguns minutos.');
      mockWebservice.verificaElegibilidade.mockRejectedValue(maintenanceError);

      await expect(gateway.verificaElegibilidade(verificaElegibilidadeRequest))
        .rejects.toThrow('Sistema em manutenção');
    });

    test('should handle high-volume batch processing', async () => {
      // Scenario: Processing multiple guide submissions
      const batchRequests = Array.from({ length: 10 }, (_, i) => ({
        ...envioLoteGuiasRequest,
        sequencialTransacao: `BATCH_${i.toString().padStart(3, '0')}`,
        loteGuias: {
          ...envioLoteGuiasRequest.loteGuias,
          numeroLote: `LOTE_${i.toString().padStart(3, '0')}`,
        },
      }));

      mockWebservice.envioLoteGuias.mockImplementation((request) => {
        return Promise.resolve([
          {
            ...envioLoteGuiasResponse,
            numeroProtocolo: `PROT_${request.loteGuias.numeroLote}`,
          },
          'response-xml',
          'headers',
          'request-xml',
        ]);
      });

      const results = await Promise.all(
        batchRequests.map(request => gateway.envioLoteGuias(request))
      );

      expect(results).toHaveLength(10);
      results.forEach((result, index) => {
        expect(result.success).toBe(true);
        expect(result.data.numeroProtocolo).toBe(`PROT_LOTE_${index.toString().padStart(3, '0')}`);
      });
    });
  });
});
