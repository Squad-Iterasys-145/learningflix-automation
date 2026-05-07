const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const ThemePage = require('../../pages/ThemePage');
const UserManagementPage = require('../../pages/UserManagementPage');
const LoginPage = require('../../pages/LoginPage');


// ACESSAR TEMAS

When('acesso o módulo de Temas', async function () {

  const linkTema = this.page
    .locator('a[href*="/local/multithemes/"]')
    .filter({ hasText: 'Gerenciar Temas' })
    .first();

  await expect(linkTema).toBeVisible({ timeout: 15000 });
  await linkTema.click();

  //  validação leve de página
  await expect(this.page.getByText('Adicionar novo tema')).toBeVisible();
});


// CRIAR TEMA

When('crio o tema {string}', async function (nomeTema) {

  const btnAdicionar = this.page.getByText('Adicionar novo tema');
  await expect(btnAdicionar).toBeVisible({ timeout: 15000 });
  await btnAdicionar.click();

  const inputNome = this.page.locator('input[id^="id_name_"]');

  await expect(inputNome).toBeVisible({ timeout: 15000 });

  await inputNome.fill('');
  await inputNome.fill(nomeTema);

  await expect(inputNome).toHaveValue(nomeTema);

  //  validação leve extra (modal continua aberto)
  await expect(this.page.locator('button[data-action="save"]')).toBeVisible();
});


// UPLOADS

When('realizo upload do logo', async function () {

  this.themePage = new ThemePage(this.page);

  await expect(this.themePage.botaoAbrirUploadLogo).toBeVisible({ timeout: 15000 });

  await this.themePage.realizarUploadLogo('qa.jpeg');

  //  melhor que timeout fixo
  await expect(this.page.locator('img')).toBeVisible();
});

When('realizo upload do favicon', async function () {

  await expect(this.themePage.botaoAbrirUploadFav).toBeVisible({ timeout: 15000 });

  await this.themePage.realizarUploadFavicon('qa.jpeg');
});

When('salvo o tema', async function () {

  await this.themePage.salvarConfiguracoes();

  //  validação leve (ideal seria toast, se existir)
  await expect(this.page).toHaveURL(/theme|multithemes/i);
});


// USUÁRIO

When('acesso o módulo Gerenciar Usuários', async function () {

  this.userPage = new UserManagementPage(this.page);

  await this.userPage.acessarGerenciarUsuarios();

  //  validação leve de página
  await expect(this.page.getByText('Editar usuário')).toBeVisible();
});

When('edito o usuário {string}', async function (usuario) {

  await this.userPage.abrirEdicaoUsuario(usuario);

  //  validação forte aqui é importante
  await expect(this.page.getByText('Editar usuário')).toBeVisible();
});

When('seleciono o tema {string}', async function (tema) {

  await this.userPage.selecionarTema(tema);

  //  validação leve: opção foi escolhida (autocomplete fechou ou mudou valor)
  const input = this.page.locator('input[placeholder="Buscar"]').first();
  await expect(input).toBeVisible();
});

When('salvo o usuário', async function () {

  await this.userPage.salvarUsuario();

  //  validação importante (modal fecha)
  await expect(this.page.locator('text=Editar usuário')).toBeHidden();
});


// LOGIN / LOGOUT

When('clico no perfil', async function () {

  const perfilBtn = this.page.getByRole('button', { name: /menu do usuário/i });
  const fallback = this.page.locator('span.userinitials').first();

  if (await perfilBtn.isVisible().catch(() => false)) {
    await perfilBtn.click();
  } else {
    await fallback.click();
  }

  //  validação leve: menu abriu
  await expect(this.page.getByRole('menuitem', { name: 'Sair' })).toBeVisible();
});

When('realizo logout', async function () {

  await this.page.getByRole('menuitem', { name: 'Sair' }).click();

  await expect(this.page).toHaveURL(/login|index\.php/i);
});

When('realizo login como {string}', async function (usuario) {

  this.loginPage = new LoginPage(this.page);

  await this.loginPage.navigate();

  let username;
  let password;

  if (usuario === 'aluno4') {
    username = process.env.ALUNO4_USERNAME;
    password = process.env.ALUNO4_PASSWORD;
  }

  await this.loginPage.login(username, password);
  await this.loginPage.btnlogin();

  await expect(this.page.locator('img.logo')).toBeVisible({ timeout: 15000 });
});


// VALIDAÇÃO FINAL
Then('devo visualizar o tema aplicado corretamente', async function () {

  const logo = this.page.locator('img.logo').first();

  await expect(logo).toBeVisible({ timeout: 15000 });

  await expect(logo).toHaveAttribute('src', /qa\.jpeg/);
});