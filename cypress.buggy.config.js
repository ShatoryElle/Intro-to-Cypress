const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: 'https://qauto2.forstudy.space',
    setupNodeEvents(on, config) {},
  },

  env: {
    userEmail: 'lvivskavik@gmail.com',
    password: 'Zadar2022'
  }
});