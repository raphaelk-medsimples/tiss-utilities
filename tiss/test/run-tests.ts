import { describe, expect, test } from 'vitest';

// Re-export test utilities for easy access
export { describe, expect, test } from 'vitest';

// Test runner configuration
export const testConfig = {
  testEnvironment: 'node',
  setupFilesAfterEnv: [],
  testMatch: ['**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/coverage/',
  ],
};

// Test helper functions
export function createMockDate(dateString: string) {
  const mockDate = new Date(dateString);
  return jest.fn(() => mockDate);
}

export function expectValidHash(hash: string) {
  expect(hash).toBeDefined();
  expect(typeof hash).toBe('string');
  expect(hash.length).toBe(32);
  expect(hash).toMatch(/^[a-f0-9]{32}$/);
}

export function expectValidTimestamp(timestamp: string | bigint) {
  if (typeof timestamp === 'bigint') {
    expect(timestamp > 0n).toBe(true);
  } else {
    expect(timestamp).toBeDefined();
    expect(typeof timestamp).toBe('string');
  }
}

export function expectValidDateTimeFields(obj: any) {
  if (obj.dataRegistroTransacao) {
    expect(obj.dataRegistroTransacao).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  }
  if (obj.horaRegistroTransacao) {
    expect(obj.horaRegistroTransacao).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  }
}

// Common test assertions
export const commonAssertions = {
  expectSuccessResponse: (response: any) => {
    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(response.data).toBeDefined();
  },
  
  expectErrorResponse: (response: any, errorMessage?: string) => {
    expect(response).toBeDefined();
    expect(response.success).toBe(false);
    if (errorMessage) {
      expect(response.error).toContain(errorMessage);
    }
  },
  
  expectValidCabecalho: (cabecalho: any) => {
    expect(cabecalho).toBeDefined();
    expect(cabecalho.identificacaoTransacao).toBeDefined();
    expect(cabecalho.identificacaoTransacao.tipoTransacao).toBeDefined();
    expectValidDateTimeFields(cabecalho.identificacaoTransacao);
  },
  
  expectHashedPassword: (senhaPrestador: string) => {
    expectValidHash(senhaPrestador);
    // Ensure it's not the original password
    expect(senhaPrestador).not.toMatch(/^senha/);
    expect(senhaPrestador).not.toMatch(/^password/);
  },
};
