const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const PublicoAlvoPage = require('../../pages/PublicoAlvoPage');

When('excluo o público-alvo criado', async function () {
  if (!this.publicoPage) {
    this.publicoPage = new PublicoAlvoPage(this.page);
  }

  await this.publicoPage.excluirPublico(this.nomePublico);
});

Then('o público-alvo não deve existir', async function () {
  await this.publicoPage.validarPublicoNaoExiste(this.nomePublico);
});