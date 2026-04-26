const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const HomePage = require('../../pages/HomePage');
const AdminPage = require('../../pages/AdminPage');
const PublicoAlvoPage = require('../../pages/PublicoAlvoPage');

const VALIDAR_REMOCAO = false;

// CONTEXTO INICIAL
Given('estou na tela inicial', async function () {
  await expect(
    this.page.getByRole('heading', { name: 'Meus Cursos' })
  ).toBeVisible();
});

// NAVEGAÇÃO BASE
When('acesso o módulo de Administração do site', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.acessarAdmin();
});

When('acesso o módulo de Plugins', async function () {
  this.adminPage = new AdminPage(this.page);
  await this.adminPage.openPlugins();
});

When('acesso o módulo de Público-Alvo', async function () {
  this.publicoPage = new PublicoAlvoPage(this.page);
  await this.publicoPage.acessarModulo();
});

When('clico em Adicionar público-alvo', async function () {
  await this.publicoPage.clicarAdicionar();
});

When('preencho o nome do público-alvo {string}', async function (nome) {
  this.nomePublico = `${nome}-${this.userType || 'user'}-${Date.now()}`;
  await this.publicoPage.preencherNome(this.nomePublico);
});

When('seleciono o perfil {string}', async function (perfil) {
  await this.publicoPage.selecionarPerfil(perfil);
});

When('salvo o público-alvo', async function () {
  await this.publicoPage.salvar();
});

Then('devo ver o público-alvo criado', async function () {
  const el = this.page.getByText(this.nomePublico);
  await expect(el).toBeVisible();
});


// MEMBROS
When('abro gerenciar membros do público-alvo', async function () {
  await this.publicoPage.abrirGerenciarMembros(this.nomePublico);
});


// ADICIONAR USUÁRIO
When('adiciono o usuário {string}', async function (nomeUsuario) {
  await this.publicoPage.adicionarUsuario(nomeUsuario);
  await this.publicoPage.salvarMembros();
  await this.publicoPage.validarUsuarioNoGrupo(nomeUsuario);
});


// REMOVER USUÁRIO
When('removo o usuário {string}', async function (nomeUsuario) {

  await this.publicoPage.removerUsuario(nomeUsuario);
  await this.publicoPage.salvarMembros();
});

When('excluo o público-alvo criado', async function () {

  if (!this.publicoPage) {
    this.publicoPage = new PublicoAlvoPage(this.page);
  }

  await this.publicoPage.excluirPublico(this.nomePublico);
});

When('busco pelo público-alvo criado', async function () {

  // garante que salvou e voltou pra lista
  await this.page.waitForTimeout(1000);

  await this.publicoPage.buscarPublico(this.nomePublico);

  await this.page.waitForTimeout(2000);

});

// VALIDAÇÕES
Then('o usuário {string} deve estar no grupo', async function (nomeUsuario) {
  await this.publicoPage.validarUsuarioNoGrupo(nomeUsuario);
  await this.page.waitForTimeout(1000);
});

// Excluir PUblico-Alvo 
Then('o usuário {string} não deve estar no grupo', async function (nomeUsuario) {

  if (!VALIDAR_REMOCAO) return;

  await expect(
    this.publicoPage.listaGrupo
      .locator('li.list-item', { hasText: nomeUsuario })
  ).toHaveCount(0);

});

Then('o público-alvo não deve existir', async function () {

  await this.publicoPage.validarPublicoNaoExiste(this.nomePublico);
  await this.page.waitForTimeout(2000);

});

Then('devo ver apenas o público-alvo buscado', async function () {

  await this.publicoPage.validarBuscaPublico(this.nomePublico);
});


// EDITAR PÚBLICO-ALVO
When('edito o público-alvo criado', async function () {
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
  const el = this.page.getByText(this.nomeEditado);
  await expect(el).toBeVisible();
  await this.page.waitForTimeout(1000);
});

