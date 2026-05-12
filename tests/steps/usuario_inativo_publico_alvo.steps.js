const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// IMPORTA A PAGE CORRETAMENTE
const UserManagementPage = require('../../pages/UserManagementPage');
const PublicoAlvoPage = require('../../pages/PublicoAlvoPage');

// INATIVAR USUÁRIO

When('inativo o usuário {string}', async function (nomeUsuario) {

  // garante instância da page object
  if (!this.userManagementPage) {
  const UserManagementPage = require('../../pages/UserManagementPage');
  this.userManagementPage = new UserManagementPage(this.page);
}

await this.userManagementPage.inativarUsuario(nomeUsuario);

  // pequena espera para atualização da UI
  await this.page.waitForLoadState('networkidle');
});

// PESQUISAR USUÁRIO NA LISTBOX
When('pesquiso o usuário {string}', async function (nomeUsuario) {

  if (!this.publicoAlvoPage) {
    this.publicoAlvoPage = new PublicoAlvoPage(this.page);
  }

  // FORÇA SEGUNDO INPUT (listbox correta)
  const inputBusca = this.page
    .locator('input[placeholder="Pesquisar"]')
    .nth(1);

  await inputBusca.waitFor({ state: 'visible', timeout: 10000 });
  await inputBusca.click();
  await inputBusca.fill(nomeUsuario);

  // aguarda UI atualizar lista
  await this.page.waitForTimeout(1000);
});


// ==========================
// VALIDAR QUE NÃO APARECE
// ==========================
Then('o usuário {string} não deve aparecer na busca', async function (nomeUsuario) {

  if (!this.publicoAlvoPage) {
    this.publicoAlvoPage = new PublicoAlvoPage(this.page);
  }

  const resultado = this.publicoAlvoPage.listBoxDisponiveis
    .locator(`li.list-item:has-text("${nomeUsuario}")`);

  await expect(resultado).toHaveCount(0);
});