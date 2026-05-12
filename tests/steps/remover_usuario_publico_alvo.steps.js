const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// REMOVER USUÁRIO
When('removo o usuário {string}', async function (nomeUsuario) {

  await this.publicoPage.removerUsuario(nomeUsuario);
  await this.publicoPage.salvarMembros();

  await this.page.waitForTimeout(1500);
});


// VALIDAR REMOÇÃO
Then('o usuário {string} não deve estar no grupo', async function (nomeUsuario) {

  // VALIDA QUE NÃO ESTÁ MAIS NO GRUPO
  const usuarioGrupo = this.publicoPage.listaGrupo
    .locator('li.list-item', { hasText: nomeUsuario });

  await expect(usuarioGrupo).toHaveCount(0);

  // PESQUISA NA LISTA DISPONÍVEL
  const inputBusca = this.publicoPage.inputBuscaUsuario;

  await inputBusca.fill(nomeUsuario);

  await this.page.waitForTimeout(1000);

  // VALIDA QUE VOLTOU PARA DISPONÍVEIS
  const usuarioDisponivel = this.publicoPage.listaDisponivel
    .locator('li.list-item', { hasText: nomeUsuario });

  await expect(usuarioDisponivel).toBeVisible();
});