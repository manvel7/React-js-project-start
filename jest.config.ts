import type {Config} from "@jest/types"
import common from "../../config/jest/common"
import packageJson from "./package.json"

const config: Config.InitialOptions = {
  ...common,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.tsx",
    "<rootDir>/src/modules/**/*.tsx",
    "!<rootDir>/src/**/*.stories.tsx",
    "!<rootDir>/src/**/*.d.ts",
    "!<rootDir>/src/index.ts"
  ],
  displayName: packageJson.name,
  rootDir: "./",
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.ts"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/**/*.test.ts?(x)"],
  moduleNameMapper: {
    "^.+\\.svg$": "<rootDir>/__mocks__/SvgMock.tsx"
  }
}

export default config
