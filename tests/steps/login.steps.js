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

When('clico no botão de login', async function () {
  await this.loginPage.btnlogin()
});

Then('devo ver a página inicial', async function () {
  await this.page.waitForLoadState('networkidle')
  await this.page.waitForURL('**/my/**')
});