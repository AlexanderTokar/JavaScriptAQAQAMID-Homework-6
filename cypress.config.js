const { defineConfig } = require('cypress');

module.exports = defineConfig({
    viewportWidth: 1536,
    viewportHeight: 960,

    e2e: {
        baseUrl: 'http://localhost:3000',

        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        retries: 1,
    },

    env: {
        viewportWidth: 375,
        viewportHeight: 812,
    },
});
