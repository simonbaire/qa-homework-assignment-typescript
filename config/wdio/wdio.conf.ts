import { Config, LogTypes } from "@wdio/config";

function getSelenoidVersion() {
  const selenoidConfig = require("../selenoid/browsers.json");
  return selenoidConfig.default;
}

const browserConfig = {
  capabilities: [{
    browserName: "chrome",
    ["selenoid:options"]: {
      enableVNC: true,
      maxInstances: 10,
      sessionTimeout: "180s",
      version: getSelenoidVersion(),
    }
  }],
  connectionRetryCount: 3,
  connectionRetryTimeout: 90000,
  hostname: "selenoid",
  path: "/wd/hub",
  port: 4444
};

const runnerConfig = {
  bail: 0,
  framework: "mocha",
  logLevel: "trace" as LogTypes,
  maxInstances: 10,
  mochaOpts: {
    timeout: 60000,
    ui: "bdd"
  },
  outputDir: "./results/logs/",
  reporters: ["spec"],
  runner: "local",
  sync: true
};

const testConfig = {
  exclude: [],
  specs: ["./src/tests/**/*.js"],
  suites: {
    all: ["./src/tests/**/*.js"],
  },
  waitforTimeout: 10000
};

export const config: Config = {
  ...runnerConfig,
  ...testConfig,
  ...browserConfig
};
