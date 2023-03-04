// JavaScript file so that loading doesn't require ts-node
/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testMatch: ['**/*_test.tsx'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
};

export default config;
