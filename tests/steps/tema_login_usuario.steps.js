const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const HomePage = require('../../pages/HomePage');
const ThemePage = require('../../pages/ThemePage');
const UserManagementPage = require('../../pages/UserManagementPage');
const LoginPage = require('../../pages/LoginPage');

// NAVEGAÇÃO ADMIN


When('acesso o módulo de Temas', async function () {

  const linkTema = this.page
    .locator('a[href*="/local/multithemes/"]')
    .filter({ hasText: 'Gerenciar Temas' })
    .first();

  await linkTema.waitFor({ state: 'visible', timeout: 15000 });

  await linkTema.scrollIntoViewIfNeeded();
  await linkTema.click();
});


// CRIAR TEMA

When('crio o tema {string}', async function (nomeTema) {

  // abre modal de criação
  const btnAdicionar = this.page.getByText('Adicionar novo tema');
  await btnAdicionar.waitFor({ state: 'visible', timeout: 15000 });
  await btnAdicionar.click();

  // confirmação (se existir modal de segurança)
  const btnConfirmar = this.page.locator('button[data-action="save"]');

  if (await btnConfirmar.isVisible().catch(() => false)) {
    await btnConfirmar.click();
  }

  // preenche nome
 const inputNome = this.page.locator('input[id^="id_name_"]');

await inputNome.waitFor({ state: 'visible', timeout: 15000 });

await inputNome.click();
await inputNome.press('Control+A');
await inputNome.press('Backspace');

await inputNome.fill(nomeTema);
await inputNome.press('Tab');
await this.page.waitForLoadState('networkidle');
});

When('preencho o campo {string} com {string}', async function (campo, valor) {
  await this.page.getByLabel(campo).fill(valor);
});

When('realizo upload do logo', async function () {

  this.themePage = new ThemePage(this.page);

  await this.themePage.botaoAbrirUploadLogo.scrollIntoViewIfNeeded();

  await this.themePage.botaoAbrirUploadLogo.waitFor({
    state: 'visible'
  });

  await this.themePage.realizarUploadLogo('qa.jpeg');
});

When('realizo upload do favicon', async function () {

  await this.themePage.botaoAbrirUploadFav.scrollIntoViewIfNeeded();

  await this.themePage.botaoAbrirUploadFav.waitFor({
    state: 'visible'
  });

  await this.themePage.realizarUploadFavicon('qa.jpeg');
});

When('salvo o tema', async function () {
  await this.themePage.salvarConfiguracoes();
});


// USUÁRIO
When('acesso o módulo Gerenciar Usuários', async function () {
  this.userPage = new UserManagementPage(this.page);
  await this.userPage.acessarGerenciarUsuarios();
});

When('edito o usuário {string}', async function (usuario) {
  await this.userPage.abrirEdicaoUsuario(usuario);
});

When('seleciono o tema {string}', async function (tema) {
  await this.userPage.selecionarTema(tema);
});

When('salvo o usuário', async function () {
  await this.userPage.salvarUsuario();
});


// PERFIL / LOGOUT / LOGIN
When('clico no perfil', async function () {
  await this.page.locator('span.userinitials').first().click();
});

When('realizo logout', async function () {
  await this.page.getByRole('menuitem', { name: 'Sair' }).click();
});


// VALIDAÇÃO
Then('devo visualizar o tema aplicado corretamente', async function () {

  const logo = this.page.locator('img.logo').first();

  await logo.waitFor({
    state: 'visible',
    timeout: 15000
  });

  await expect(logo).toHaveAttribute(
    'src',
    /qa\.jpeg/
  );

  await this.page.waitForTimeout(3000);
});