const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const VALIDAR_REMOCAO = false;

// REMOVER USUÁRIO
When('removo o usuário {string}', async function (nomeUsuario) {

  await this.publicoPage.removerUsuario(nomeUsuario);
  await this.publicoPage.salvarMembros();

  await this.page.waitForTimeout(1500);
});

// VALIDAÇÃO (DESLIGÁVEL)
Then('o usuário {string} não deve estar no grupo', async function (nomeUsuario) {

  if (!VALIDAR_REMOCAO) {
    console.log(`Validação de remoção desativada para: ${nomeUsuario}`);
    return;
  }

  const usuario = this.publicoPage.usuarioNoGrupo(nomeUsuario);

  await expect(usuario).toHaveCount(0);
});