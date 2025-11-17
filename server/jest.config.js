export default {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.test.js'],
  testMatch: ['**/__tests__/**/*.test.js'],
  transformIgnorePatterns: ['/node_modules/'],
};
