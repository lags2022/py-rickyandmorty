/** @type {import('jest').Config} */

const config = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.jsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  }
}

export default config
