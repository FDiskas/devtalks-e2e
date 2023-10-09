import { defineConfig } from 'cypress';

export default defineConfig({
  watchForFileChanges: true,
  viewportWidth: 800,
  viewportHeight: 600,
  screenshotsFolder: 'reports',
  videosFolder: 'reports',

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/tests/main.{js,jsx,ts,tsx}',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },

  env: {
    'cypress-react-selector': {
      root: '#__next',
    },
  },
});
