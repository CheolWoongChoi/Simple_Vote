module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  moduleDirectories: ['src', 'node_modules'],  
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/**/Login/*.test.(js|jsx|ts|tsx)',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  snapshotResolver: '<rootDir>/jest.snapshotResolver.js'
};