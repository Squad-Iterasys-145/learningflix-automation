const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { HomePage } = require('../../pages/HomePage');
const { AdminPage } = require('../../pages/AdmPage');
const { PublicoAlvoPage } = require('../../pages/PublicoAlvoPage');

Given('que estou logado como {string}', async function (tipoUsuario) {
  this.userType = tipoUsuario;

  let username;
  let password;

  if (tipoUsuario === 'admin') {
    username = process.env.ADMIN_USER;
    password = process.env.ADMIN_PASS;
  } else {
    username = process.env.CLIENTE_USER;
    password = process.env.CLIENTE_PASS;
  }

  this.loginPage = new LoginPage(this.page);

  await this.loginPage.navigate();
  await this.loginPage.login(username, password);
  await this.loginPage.btnlogin();

  await expect(
    this.page.getByRole('heading', { name: 'Meus Cursos' })
  ).toBeVisible();
});

Given('estou na tela inicial', async function () {
  await expect(
    this.page.getByRole('heading', { name: 'Meus Cursos' })
  ).toBeVisible();
});

When('acesso o módulo de Administração do site', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.acessarAdmin();
});

When('acesso o módulo de Plugins', async function () {
  this.adminPage = new AdminPage(this.page);
  await this.adminPage.openPlugins();
});

When('acesso Gerenciar Público-Alvo', async function () {
  await this.homePage.acessarGerenciarPublicoAlvo();

  // ADICIONA ESTA LINHA
  this.publicoPage = new PublicoAlvoPage(this.page);
});

When('acesso o módulo de Público-Alvo', async function () {
  this.publicoPage = new PublicoAlvoPage(this.page);
  await this.publicoPage.acessarModulo();
});

When('clico em Adicionar público-alvo', async function () {
  if (!this.publicoPage) {
    this.publicoPage = new PublicoAlvoPage(this.page);
  }

  await this.publicoPage.clicarAdicionar();
});

When('preencho o nome do público-alvo {string}', async function (nome) {
  this.nomePublico = `${nome}-${this.userType}-${Date.now()}`;

  await this.publicoPage.preencherNome(this.nomePublico);
});

When('seleciono o perfil {string}', async function (perfil) {
  await this.publicoPage.selecionarPerfil(perfil);
});

When('salvo o público-alvo', async function () {
  await this.publicoPage.salvar();
});

Then('devo ver a tela de Público-Alvo', async function () {
  await expect(
    this.page.getByRole('heading', { name: 'Público-Alvo' })
  ).toBeVisible();
});

Then('devo ver o público-alvo criado', async function () {
  const publico = this.page.getByText(this.nomePublico);

  await publico.waitFor({ state: 'visible', timeout: 10000 });

  await expect(publico).toBeVisible();
});