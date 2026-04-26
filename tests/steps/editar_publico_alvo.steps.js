const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const PublicoAlvoPage = require('../../pages/PublicoAlvoPage');

When('edito o público-alvo criado', async function () {
  if (!this.publicoPage) {
    this.publicoPage = new PublicoAlvoPage(this.page);
  }

  await this.publicoPage.editarPublico(this.nomePublico);
});

When('altero o nome do público-alvo para um novo valor', async function () {
  this.nomeEditado = `Publico Editado-${this.userType || 'user'}-${Date.now()}`;

  await this.publicoPage.preencherNome(this.nomeEditado);
});

When('clico em Atualizar público-alvo', async function () {
  await this.publicoPage.atualizarPublico();
});

Then('devo ver o público-alvo com o nome atualizado', async function () {
  await expect(
    this.page.getByText(this.nomeEditado)
  ).toBeVisible();
});