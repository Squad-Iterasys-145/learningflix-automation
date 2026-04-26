const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const PublicoAlvoPage = require('../../pages/PublicoAlvoPage');

When('busco pelo público-alvo criado', async function () {
  if (!this.publicoPage) {
    this.publicoPage = new PublicoAlvoPage(this.page);
  }

  await this.publicoPage.buscarPublico(this.nomePublico);
});

Then('devo ver apenas o público-alvo buscado', async function () {
  await this.publicoPage.validarBuscaPublico(this.nomePublico);
});