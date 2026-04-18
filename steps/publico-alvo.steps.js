import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { usuarios } from '../data/usuarios.js';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';
import { AdminPage } from '../pages/AdminPage.js';
import { PublicoAlvoPage } from '../pages/PublicoAlvoPage.js';

Given('que estou logado no sistema', async function () {
  const user = usuarios.admin;

  this.loginPage = new LoginPage(this.page);

  await this.loginPage.navigate();
  await this.loginPage.login(user.username, user.password);
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

  await this.homePage.openAdmin();
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
  this.nomePublico = nome;
  await this.publicoPage.preencherNome(nome);
});

When('seleciono o perfil {string}', async function (perfil) {
  await this.publicoPage.selecionarPerfil(perfil, 'Tema');
});

When('salvo o público-alvo', async function () {
  await this.publicoPage.salvar();
});

Then('devo ver a tela de Público-Alvo', async function () {
  await expect(
    this.page.getByRole('heading', { name: 'Público-Alvo' })
  ).toBeVisible();
});

Then('devo ver o público-alvo {string} criado', async function (nome) {
  await expect(
    this.page.getByRole('cell', { name: nome }).last()
  ).toBeVisible();
});