const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../../pages/LoginPage')

Given('que acesso a página de login', async function () {
  this.loginPage = new LoginPage(this.page)
  await this.loginPage.navigate()
});

When('preencho o username e password de administrador', async function () {
  await this.loginPage.login(
    process.env.ADMIN_USERNAME,
    process.env.ADMIN_PASSWORD
  );
});

When('preencho o username e password de administrador cliente', async function () {
  await this.loginPage.login(
    process.env.CLIENT_USERNAME,
    process.env.CLIENT_PASSWORD
  );
});

When('clico no botão de login', async function () {
  await this.loginPage.btnlogin()
});

Then('devo ver a página inicial', async function () {
  await this.page.waitForLoadState('networkidle')
  await this.page.waitForURL('**/my/**')
});

// =========================
// LOGIN CENTRALIZADO (ALUNOS)
// =========================

const ALUNOS = {
  aluno: {
    username: process.env.ALUNO_USERNAME,
    password: process.env.ALUNO_PASSWORD
  },
  aluno2: {
    username: process.env.ALUNO2_USERNAME,
    password: process.env.ALUNO2_PASSWORD
  },
  aluno3: {
    username: process.env.ALUNO3_USERNAME,
    password: process.env.ALUNO3_PASSWORD
  },
  aluno4: {
    username: process.env.ALUNO4_USERNAME,
    password: process.env.ALUNO4_PASSWORD
  },
  aluno5: {
    username: process.env.ALUNO5_USERNAME,
    password: process.env.ALUNO5_PASSWORD
  },
  aluno6: {
    username: process.env.ALUNO6_USERNAME,
    password: process.env.ALUNO6_PASSWORD
  }
};

// STEP ÚNICO PARA TODOS OS ALUNOS
When('realizo login como {string}', async function (usuario) {

  this.loginPage = new LoginPage(this.page);

  await this.loginPage.navigate();

  const credenciais = ALUNOS[usuario];

  if (!credenciais) {
    throw new Error(`Usuário não mapeado: ${usuario}`);
  }

  await this.loginPage.login(
    credenciais.username,
    credenciais.password
  );

  await this.loginPage.btnlogin();

  await this.page.waitForURL('**/my/**');
  await this.page.locator('img.logo').first().waitFor({ state: 'visible' });
});