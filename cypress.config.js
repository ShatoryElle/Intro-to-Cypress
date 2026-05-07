const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space', // приклад тестового сайту
    viewportWidth: 1440,
    viewportHeight: 900,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // місце для майбутніх налаштувань проєкту
    },
  },
});