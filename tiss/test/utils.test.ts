import { describe, expect, test, vi, beforeEach } from 'vitest';
import { createHash } from 'node:crypto';
import {
  microUTCTimestamp,
  IdentificacaoTransacao,
  Cabecalho,
  AmilCabecalho,
  calcHash,
  calcObjectHash,
  validateCabecalhoParams,
  enhancedCabecalho,
  enhancedAmilCabecalho,
  type CabecalhoParams,
  type IdentificacaoTransacaoParams,
  type TipoTransacao,
} from '../utils';

describe('Utils Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('microUTCTimestamp', () => {
    test('should generate a BigInt timestamp', () => {
      const timestamp = microUTCTimestamp();
      expect(typeof timestamp).toBe('bigint');
      expect(timestamp > 0n).toBe(true);
    });

    test('should use provided date', () => {
      const testDate = new Date('2024-01-15T10:30:45.123Z');
      const timestamp = microUTCTimestamp(testDate);
      expect(typeof timestamp).toBe('bigint');
    });

    test('should generate different timestamps for different calls', async () => {
      const timestamp1 = microUTCTimestamp();
      // Small delay to ensure different timestamps
      await new Promise(resolve => setTimeout(resolve, 1));
      const timestamp2 = microUTCTimestamp();
      expect(timestamp1).not.toBe(timestamp2);
    });
  });

  describe('IdentificacaoTransacao', () => {
    test('should create identification with required fields', () => {
      const params: IdentificacaoTransacaoParams = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
      };

      const result = IdentificacaoTransacao(params);

      expect(result).toMatchObject({
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        dataRegistroTransacao: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
        horaRegistroTransacao: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
        sequencialTransacao: expect.any(String),
      });
    });

    test('should use provided sequencialTransacao', () => {
      const params: IdentificacaoTransacaoParams = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
        sequencialTransacao: 'CUSTOM_SEQ_123',
      };

      const result = IdentificacaoTransacao(params);
      expect(result.sequencialTransacao).toBe('CUSTOM_SEQ_123');
    });

    test('should generate sequencialTransacao when not provided', () => {
      const params: IdentificacaoTransacaoParams = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
      };

      const result = IdentificacaoTransacao(params);
      expect(result.sequencialTransacao).toBeDefined();
      expect(result.sequencialTransacao!.length).toBeGreaterThan(0);
    });

    test('should generate correct date and time format', () => {
      const params: IdentificacaoTransacaoParams = {
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
      };

      const result = IdentificacaoTransacao(params);
      expect(result.dataRegistroTransacao).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(result.horaRegistroTransacao).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    });
  });

  describe('Cabecalho', () => {
    const validParams: CabecalhoParams = {
      versaoTISS: '4.01.00',
      registroANS: '326305',
      codigoPrestador: 'PREST001',
      senhaPrestador: 'senha123',
      tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
    };

    test('should create valid cabecalho structure', () => {
      const result = Cabecalho(validParams);

      expect(result).toMatchObject({
        identificacaoTransacao: expect.objectContaining({
          tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
          dataRegistroTransacao: expect.any(String),
          horaRegistroTransacao: expect.any(String),
        }),
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
          senhaPrestador: expect.any(String),
        },
      });
    });

    test('should hash senha with MD5', () => {
      const result = Cabecalho(validParams);
      const expectedHash = createHash('md5').update('senha123').digest('hex');
      expect(result.loginSenhaPrestador?.senhaPrestador).toBe(expectedHash);
    });
  });

  describe('AmilCabecalho', () => {
    test('should use Amil ANS registration', () => {
      const params = {
        versaoTISS: '4.01.00' as const,
        codigoPrestador: 'PREST001',
        senhaPrestador: 'senha123',
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE' as TipoTransacao,
      };

      const result = AmilCabecalho(params);
      expect(result.destino?.registroANS).toBe('326305');
    });
  });

  describe('calcHash', () => {
    test('should calculate MD5 hash from XML string', async () => {
      const xmlString = `
        <root>
          <field1>value1</field1>
          <field2>value2</field2>
        </root>
      `;

      const hash = await calcHash(xmlString);
      expect(typeof hash).toBe('string');
      expect(hash.length).toBe(32); // MD5 hash length
      expect(hash).toMatch(/^[a-f0-9]{32}$/);
    });

    test('should produce consistent hash for same input', async () => {
      const xmlString = '<test>value</test>';
      
      const hash1 = await calcHash(xmlString);
      const hash2 = await calcHash(xmlString);
      
      expect(hash1).toBe(hash2);
    });

    test('should produce different hash for different input', async () => {
      const xml1 = '<root><field>value1</field><other>data1</other></root>';
      const xml2 = '<root><field>value2</field><other>data2</other></root>';
      
      const hash1 = await calcHash(xml1);
      const hash2 = await calcHash(xml2);
      
      // Log for debugging if needed
      if (hash1 === hash2) {
        console.log('XML1:', xml1);
        console.log('XML2:', xml2);
        console.log('Hash1:', hash1);
        console.log('Hash2:', hash2);
      }
      
      expect(hash1).not.toBe(hash2);
    });
  });

  describe('calcObjectHash', () => {
    test('should calculate hash from object values', () => {
      const obj = {
        field1: 'value1',
        field2: 'value2',
        nested: {
          field3: 'value3',
        },
      };

      const hash = calcObjectHash(obj);
      expect(typeof hash).toBe('string');
      expect(hash.length).toBe(32);
      expect(hash).toMatch(/^[a-f0-9]{32}$/);
    });

    test('should produce consistent hash for same object', () => {
      const obj = { test: 'value' };
      
      const hash1 = calcObjectHash(obj);
      const hash2 = calcObjectHash(obj);
      
      expect(hash1).toBe(hash2);
    });

    test('should handle different data types', () => {
      const obj = {
        string: 'test',
        number: 123,
        boolean: true,
        array: [1, 2, 3],
        nested: { deep: 'value' },
      };

      const hash = calcObjectHash(obj);
      expect(typeof hash).toBe('string');
      expect(hash.length).toBe(32);
    });
  });

  describe('validateCabecalhoParams', () => {
    const validParams: CabecalhoParams = {
      versaoTISS: '4.01.00',
      registroANS: '326305',
      codigoPrestador: 'PREST001',
      senhaPrestador: 'senha123',
      tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
    };

    test('should pass validation for valid parameters', () => {
      expect(() => validateCabecalhoParams(validParams)).not.toThrow();
    });

    test('should throw error for missing registroANS', () => {
      const invalidParams = { ...validParams, registroANS: '' };
      expect(() => validateCabecalhoParams(invalidParams))
        .toThrow('registroANS is required and cannot be empty');
    });

    test('should throw error for missing codigoPrestador', () => {
      const invalidParams = { ...validParams, codigoPrestador: '' };
      expect(() => validateCabecalhoParams(invalidParams))
        .toThrow('codigoPrestador is required and cannot be empty');
    });

    test('should throw error for missing senhaPrestador', () => {
      const invalidParams = { ...validParams, senhaPrestador: '' };
      expect(() => validateCabecalhoParams(invalidParams))
        .toThrow('senhaPrestador is required and cannot be empty');
    });

    test('should throw error for missing versaoTISS', () => {
      const invalidParams = { ...validParams, versaoTISS: '' as any };
      expect(() => validateCabecalhoParams(invalidParams))
        .toThrow('versaoTISS is required and cannot be empty');
    });

    test('should throw error for whitespace-only values', () => {
      const invalidParams = { ...validParams, registroANS: '   ' };
      expect(() => validateCabecalhoParams(invalidParams))
        .toThrow('registroANS is required and cannot be empty');
    });
  });

  describe('enhancedCabecalho', () => {
    const validParams: CabecalhoParams = {
      versaoTISS: '4.01.00',
      registroANS: '326305',
      codigoPrestador: 'PREST001',
      senhaPrestador: 'senha123',
      tipoTransacao: 'VERIFICA_ELEGIBILIDADE',
    };

    test('should validate and create enhanced cabecalho', () => {
      const result = enhancedCabecalho(validParams);
      
      expect(result).toBeDefined();
      expect(result.loginSenhaPrestador?.senhaPrestador)
        .toBe(createHash('md5').update('senha123').digest('hex'));
    });

    test('should throw error for invalid parameters', () => {
      const invalidParams = { ...validParams, registroANS: '' };
      expect(() => enhancedCabecalho(invalidParams))
        .toThrow('registroANS is required and cannot be empty');
    });

    test('should hash password with MD5', () => {
      const result = enhancedCabecalho(validParams);
      const expectedHash = createHash('md5').update('senha123').digest('hex');
      
      expect(result.loginSenhaPrestador?.senhaPrestador).toBe(expectedHash);
      expect(result.loginSenhaPrestador?.senhaPrestador).not.toBe('senha123');
    });
  });

  describe('enhancedAmilCabecalho', () => {
    test('should create enhanced Amil cabecalho', () => {
      const params = {
        versaoTISS: '4.01.00' as const,
        codigoPrestador: 'PREST001',
        senhaPrestador: 'senha123',
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE' as TipoTransacao,
      };

      const result = enhancedAmilCabecalho(params);
      
      expect(result.destino?.registroANS).toBe('326305');
      expect(result.loginSenhaPrestador?.senhaPrestador)
        .toBe(createHash('md5').update('senha123').digest('hex'));
    });

    test('should validate parameters', () => {
      const invalidParams = {
        versaoTISS: '4.01.00' as const,
        codigoPrestador: '',
        senhaPrestador: 'senha123',
        tipoTransacao: 'VERIFICA_ELEGIBILIDADE' as TipoTransacao,
      };

      expect(() => enhancedAmilCabecalho(invalidParams))
        .toThrow('codigoPrestador is required and cannot be empty');
    });
  });
});
