const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true, // ou false para desativar a gravação
  videoCompression: 32, // compressão do vídeo (0 para desativar)

  viewportHeight: 880,
  viewportWidth: 1280,
  pageLoadTimeout: 180000, // Aumenta o tempo limite de carregamento da página para 180 segundos
  defaultCommandTimeout: 10000, // Define o timeout padrão para 10 segundos

  e2e: {
    setupNodeEvents(on, config) {
      // Node event listeners podem ser implementados aqui
    },
    baseUrl: 'https://hmg-sav.wooza.com.br/alliedigital', // Adiciona a URL base para simplificar testes
  },
  env: {
    cpf: '33435321008',
    senha: '334353'
  },

  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  browser: "chrome",
  chromeWebPreferences: {
    disablePopupBlocking: true
  }
});





