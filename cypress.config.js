const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  pageLoadTimeout: 120000, // Aumenta o tempo limite de carregamento da página para 120 segundos
  e2e: {
    setupNodeEvents(on, config) {
      // Node event listeners podem ser implementados aqui
    },
    baseUrl: 'https://hmg-sav.wooza.com.br/alliedigital', // Adiciona a URL base para simplificar testes
  },
  env: {
    cpf: '03932098307',
    senha: '039320'
  }
  
})




