module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/__mocks__/styleMock.js",
  },
};
