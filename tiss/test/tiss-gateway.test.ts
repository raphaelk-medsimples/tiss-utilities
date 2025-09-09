import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest';
import { TissGateway, type TissGatewayConfig, type TissRequestBase } from '../tiss-service';
import type { WsdlUrlMapping } from '../../tiss-webservice/tiss-webservice';
import type { PedidoElegibilidadeWs } from '../../tiss-webservice/client/verificaelegibilidade/definitions/PedidoElegibilidadeWs';
import type { RespostaElegibilidadeWs } from '../../tiss-webservice/client/verificaelegibilidade/definitions/RespostaElegibilidadeWs';
import type { CabecalhoParams, TipoTransacao } from '../utils';

// Create mocked functions that will be reused
const mockVerificaElegibilidade = vi.fn();
const mockSolicitaStatusAutorizacao = vi.fn();
const mockEnvioLoteGuias = vi.fn();
const mockUpdateWsdlUrls = vi.fn();
const mockClearCache = vi.fn();

// Mock the TissWebservice
vi.mock('../../tiss-webservice/tiss-webservice', () => {
  const mockImplementation = vi.fn().mockImplementation((urls) => ({
    verificaElegibilidade: mockVerificaElegibilidade,
    solicitaStatusAutorizacao: mockSolicitaStatusAutorizacao,
    envioLoteGuias: mockEnvioLoteGuias,
    updateWsdlUrls: mockUpdateWsdlUrls,
    clearCache: mockClearCache,
    urls,
  }));
  
  return {
    TissWebservice: mockImplementation,
    WsdlUrlMapping: {} as any,
  };
});

// Mock utils functions that are tested separately
vi.mock('../utils', async (importOriginal) => {
  const original = await importOriginal<typeof import('../utils')>();
  return {
    ...original,
    calcObjectHash: vi.fn().mockReturnValue('mock_hash_123456'),
    enhancedCabecalho: vi.fn().mockReturnValue({
      identificacaoTransacao: {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        sequencialTransacao: '123456789',
        dataRegistroTransacao: '2024-01-15',
        horaRegistroTransacao: '10:30:45',
      },
      origem: {
        identificacaoPrestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      },
      destino: {
        registroANS: '326305',
      },
      Padrao: '4.01.00',
      loginSenhaPrestador: {
        loginPrestador: 'PREST001',
        senhaPrestador: 'mock_hashed_password',
      },
    }),
    enhancedAmilCabecalho: vi.fn().mockImplementation((params) => ({
      ...original.enhancedCabecalho(params),
      destino: { registroANS: '326305' },
    })),
  };
});

describe('TissGateway', () => {
  let gateway: TissGateway<Partial<WsdlUrlMapping>>;
  let mockWebservice: any;

  const wsdlUrls: Partial<WsdlUrlMapping> = {
    VERIFICA_ELEGIBILIDADE: 'https://test.com/verifica-elegibilidade?wsdl',
    SOLICITA_STATUS_AUTORIZACAO: 'https://test.com/status-autorizacao?wsdl',
    ENVIO_LOTE_GUIAS: 'https://test.com/lote-guias?wsdl',
  };

  const defaultConfig: TissGatewayConfig = {
    defaultCabecalhoParams: {
      versaoTISS: '4.01.00',
      registroANS: '326305',
      codigoPrestador: 'PREST001',
      senhaPrestador: 'senha123',
    },
    enableRequestHashing: true,
    enableResponseLogging: false,
    useAmil: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    gateway = new TissGateway(wsdlUrls, defaultConfig);
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

  describe('Constructor', () => {
    test('should create gateway with default config', () => {
      const simpleGateway = new TissGateway(wsdlUrls);
      expect(simpleGateway).toBeDefined();
    });

    test('should merge provided config with defaults', () => {
      const customConfig: TissGatewayConfig = {
        enableResponseLogging: true,
      };

      const customGateway = new TissGateway(wsdlUrls, customConfig);
      expect(customGateway).toBeDefined();
    });

    test('should initialize with provided URLs', () => {
      expect(mockWebservice.urls).toBe(wsdlUrls);
    });
  });

  describe('verificaElegibilidade', () => {
    const mockResponse: RespostaElegibilidadeWs = {
      cabecalho: {
        identificacaoTransacao: {
          tipoTransacao: 'SITUACAO_ELEGIBILIDADE',
          sequencialTransacao: '123456789',
          dataRegistroTransacao: '2024-01-15',
          horaRegistroTransacao: '10:30:45',
        },
      },
      beneficiarioValido: true,
      contratadoValido: true,
    };

    beforeEach(() => {
      mockWebservice.verificaElegibilidade.mockResolvedValue([
        mockResponse,
        'raw-response',
        'soap-header',
        'raw-request',
      ]);
    });

    test('should call webservice with enhanced request', async () => {
      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      const result = await gateway.verificaElegibilidade(request);

      expect(mockWebservice.verificaElegibilidade).toHaveBeenCalledWith(
        expect.objectContaining({
          ...request,
          cabecalho: expect.any(Object),
        }),
        undefined
      );

      expect(result).toMatchObject({
        success: true,
        data: mockResponse,
        requestHash: 'mock_hash_123456',
      });
    });

    test('should auto-set tipoTransacao if not provided', async () => {
      const request = {
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      } as PedidoElegibilidadeWs & TissRequestBase;

      await gateway.verificaElegibilidade(request);

      expect(request.tipoTransacao).toBe('VERIFICA_ELEGIBILIDADE');
    });

    test('should allow custom cabecalho parameters', async () => {
      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      const customCabecalho = {
        versaoTISS: '4.00.01' as const,
        codigoPrestador: 'CUSTOM_PREST',
      };

      await gateway.verificaElegibilidade(request, customCabecalho);

      expect(mockWebservice.verificaElegibilidade).toHaveBeenCalled();
    });

    test('should pass SOAP options to webservice', async () => {
      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      const soapOptions = { timeout: 5000 };

      await gateway.verificaElegibilidade(request, undefined, soapOptions);

      expect(mockWebservice.verificaElegibilidade).toHaveBeenCalledWith(
        expect.any(Object),
        soapOptions
      );
    });

    test('should handle webservice errors', async () => {
      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      const error = new Error('SOAP Error');
      mockWebservice.verificaElegibilidade.mockRejectedValue(error);

      await expect(gateway.verificaElegibilidade(request)).rejects.toThrow('SOAP Error');
    });
  });

  describe('Configuration Management', () => {
    test('should update gateway config', () => {
      const newConfig = {
        enableResponseLogging: true,
        enableRequestHashing: false,
      };

      gateway.updateConfig(newConfig);
      expect(() => gateway.updateConfig(newConfig)).not.toThrow();
    });

    test('should update WSDL URLs', () => {
      const newUrls = {
        VERIFICA_ELEGIBILIDADE: 'https://new-url.com/verifica-elegibilidade?wsdl',
      };

      gateway.updateWsdlUrls(newUrls);
      expect(mockWebservice.updateWsdlUrls).toHaveBeenCalledWith(newUrls);
    });

    test('should update default cabecalho parameters', () => {
      const newParams = {
        versaoTISS: '4.00.01' as const,
        codigoPrestador: 'NEW_PREST',
      };

      expect(() => gateway.updateDefaultCabecalhoParams(newParams)).not.toThrow();
    });

    test('should clear cache', () => {
      gateway.clearCache();
      expect(mockWebservice.clearCache).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    test('should throw error when no cabecalho params provided', async () => {
      const gatewayNoCabecalho = new TissGateway(wsdlUrls, {});
      
      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      await expect(gatewayNoCabecalho.verificaElegibilidade(request))
        .rejects.toThrow('Cabecalho parameters must be provided either in constructor or method call');
    });

    test('should handle validation errors in enhanced request creation', async () => {
      // Mock enhancedCabecalho to throw validation error
      const { enhancedCabecalho } = await import('../utils');
      vi.mocked(enhancedCabecalho).mockImplementationOnce(() => {
        throw new Error('Validation error');
      });

      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      await expect(gateway.verificaElegibilidade(request))
        .rejects.toThrow('Validation error');
    });
  });

  describe('Hash and Logging Features', () => {
    test('should include request hash when hashing enabled', async () => {
      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      mockWebservice.verificaElegibilidade.mockResolvedValue([
        { beneficiarioValido: true },
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.verificaElegibilidade(request);
      
      expect(result.requestHash).toBe('mock_hash_123456');
    });

    test('should not include request hash when hashing disabled', async () => {
      gateway.updateConfig({ enableRequestHashing: false });

      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      mockWebservice.verificaElegibilidade.mockResolvedValue([
        { beneficiarioValido: true },
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.verificaElegibilidade(request);
      
      expect(result.requestHash).toBeUndefined();
    });

    test('should include raw response data when logging enabled', async () => {
      gateway.updateConfig({ enableResponseLogging: true });

      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      const mockRawResponse = 'mock-raw-response';
      const mockSoapHeader = 'mock-soap-header';
      const mockRawRequest = 'mock-raw-request';

      mockWebservice.verificaElegibilidade.mockResolvedValue([
        { beneficiarioValido: true },
        mockRawResponse,
        mockSoapHeader,
        mockRawRequest,
      ]);

      const result = await gateway.verificaElegibilidade(request);
      
      expect(result.rawResponse).toBe(mockRawResponse);
      expect(result.soapHeader).toBe(mockSoapHeader);
      expect(result.rawRequest).toBe(mockRawRequest);
    });
  });

  describe('Amil Integration', () => {
    test('should use enhancedAmilCabecalho when useAmil is true', async () => {
      const { enhancedAmilCabecalho } = await import('../utils');
      
      gateway.updateConfig({ useAmil: true });

      const request: PedidoElegibilidadeWs & TissRequestBase = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        beneficiario: {
          numeroCarteira: '123456789012345',
          atendimentoRN: 'S',
          nomeBeneficiario: 'João da Silva',
        },
        prestador: {
          codigoPrestadorNaOperadora: 'PREST001',
        },
      };

      mockWebservice.verificaElegibilidade.mockResolvedValue([
        { beneficiarioValido: true },
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      await gateway.verificaElegibilidade(request);

      expect(enhancedAmilCabecalho).toHaveBeenCalled();
    });
  });

  describe('Multiple Operations', () => {
    test('should support solicitaStatusAutorizacao', async () => {
      const request = {
        tipoTransacao: 'SOLICITA_STATUS_AUTORIZACAO' as TipoTransacao,
        numeroAutorizacao: '123456789',
      };

      mockWebservice.solicitaStatusAutorizacao = vi.fn().mockResolvedValue([
        { situacaoAutorizacao: 'AUTORIZADA' },
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.solicitaStatusAutorizacao(request);

      expect(mockWebservice.solicitaStatusAutorizacao).toHaveBeenCalled();
      expect(result.success).toBe(true);
    });

    test('should support envioLoteGuias', async () => {
      const request = {
        tipoTransacao: 'ENVIO_LOTE_GUIAS' as TipoTransacao,
        loteGuias: {
          numeroLote: '001',
        },
      };

      mockWebservice.envioLoteGuias = vi.fn().mockResolvedValue([
        { numeroProtocolo: '123456789' },
        'raw-response',
        'soap-header',
        'raw-request',
      ]);

      const result = await gateway.envioLoteGuias(request);

      expect(mockWebservice.envioLoteGuias).toHaveBeenCalled();
      expect(result.success).toBe(true);
    });
  });
});
