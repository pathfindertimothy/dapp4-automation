import { defineConfig } from "cypress";
import { configureSynpressForMetaMask } from '@synthetixio/synpress/cypress'
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

// async function setupNodeEvents(
//   on: Cypress.PluginEvents,
//   config: Cypress.PluginConfigOptions,
// ): Promise<Cypress.PluginConfigOptions> {
//   configureSynpressForMetaMask(on, config)
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     }),
//   );

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

export default defineConfig({
  e2e: {
    experimentalInteractiveRunEvents: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'reports',
        quite: true,
        overwrite: false,
        html: true,
        json: false,
      },
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'e2e/test_steps/*.feature',
    supportFile: 'e2e/support/e2e.{js,jsx,ts,tsx}',
    testIsolation: false,
    async setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      )
      await addCucumberPreprocessorPlugin(on, config);
      configureSynpressForMetaMask(on, config)

      return config

    },
  },
});