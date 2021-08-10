// module.exports = {
//   coverageDirectory: "coverage",
//   testEnvironment: "node",
//   collectCoverageFrom: ["**/src/**/*.js"],
//   preset: "@shelf/jest-mongodb",
//   watchPathIgnorePatterns: ["globalConfig"],
// };
module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "node",
  collectCoverageFrom: ["**/src/**/*.js", "!**/src/main/**"],
  preset: "@shelf/jest-mongodb",
  watchPathIgnorePatterns: ["globalConfig"],
};
