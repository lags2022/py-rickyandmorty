/** @type {import('jest').Config} */

const config = {
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.jsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  }
}

export default config
