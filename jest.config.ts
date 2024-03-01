import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^hari-new-test-org-project-1$': '<rootDir>/src/index.ts',
    '^hari-new-test-org-project-1/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^hari-new-test-org-project-1/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
