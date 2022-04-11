export default {
  clearMocks: true,
  collectCoverage: true,
  bail: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "logger.js"],
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],

  rootDir: ".",

 
  setupFiles: ["dotenv/config"],

  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  testPathIgnorePatterns: ["/node_modules/"],
};
