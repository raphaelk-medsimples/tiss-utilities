import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    name: { label: 'tiss', color: 'green' },
    environment: 'node',
    env: {
      PAYLOAD_SECRET: 'test',
    }
  }
});

