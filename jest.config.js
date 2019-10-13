module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '\\.(ts|js)x?$': 'ts-jest',
    '^.+\\.(css|less)$': './styleMock.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  collectCoverageFrom: ['components/*.{js,ts,jsx,tsx}', 'components/**/*.{js,ts,jsx,tsx}'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', '@testing-library/react/dont-cleanup-after-each']
};
