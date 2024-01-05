const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl : 'https://moneh.leonardhors.site',
        specPattern : "cypress/support/e2e",
        supportFile : false
    }
})