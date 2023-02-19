/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testMatch: ['**/*_test.tsx'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
};

export default config;
