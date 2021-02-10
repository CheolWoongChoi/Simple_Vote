module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],  
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  snapshotResolver: '<rootDir>/jest.snapshotResolver.js'
};