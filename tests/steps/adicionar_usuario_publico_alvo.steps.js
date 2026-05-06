const { When, Then } = require('@cucumber/cucumber');
const PublicoAlvoPage = require('../../pages/PublicoAlvoPage');

// abre membros (reuso do fluxo já existente)
When('abro gerenciar membros do público-alvo', async function () {
  await this.publicoPage.abrirGerenciarMembros(this.nomePublico);
});

// ação principal (somente isso aqui)
When('adiciono o usuário {string}', async function (usuario) {
  await this.publicoPage.adicionarUsuario(usuario);
  await this.publicoPage.salvarMembros();
});

// validação
Then('o usuário {string} deve estar no grupo', async function (usuario) {
  await this.publicoPage.validarUsuarioNoGrupo(usuario);
});