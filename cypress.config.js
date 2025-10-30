const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    baseUrl: 'http://localhost:8080',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 6000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // Ex.: capturar screenshots on-fail
      on('after:screenshot', (details) => {
        // hook disponível se quiser tratar screenshots
      });
      return config;
    },
  },
});
