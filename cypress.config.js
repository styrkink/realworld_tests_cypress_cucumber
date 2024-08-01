const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/default',
    reportFilename: 'index',
    quiet: true,
    overwrite: false,
    html: true
  },
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: [
          'cypress/e2e/step_definitions/[filepath].js',
          'cypress/e2e/[filepath]/**/*.js',
          'cypress/e2e/[filepath].js',
          'cypress/support/step_definitions/**/*.js',
        ]
      });
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://conduit.realworld.how/',
    
  },
});
