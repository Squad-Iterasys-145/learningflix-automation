const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../../pages/LoginPage')
const HomePage = require('../../pages/HomePage')
const AdminPage = require('../../pages/AdminPage')
const ThemePage = require('../../pages/ThemePage')

Given('que estou logado como {string}', async function (usuario) {
    this.usuarioAtual = usuario // Guarda o tipo de usuário para usar depois

    this.usuarioAtual = usuario
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()

    let username, password;

    if (usuario === 'adm') {
        username = process.env.ADMIN_USERNAME; 
        password = process.env.ADMIN_PASSWORD;
    } else {
        username = process.env.CLIENT_USERNAME; 
        password = process.env.CLIENT_PASSWORD;
    }

    await this.loginPage.login(username, password)
    await this.loginPage.btnlogin()
     await this.page.waitForURL('**/my/**', { timeout: 30000 }) // ← Adicionado porque a página estava fechando inesperadamente
    await this.page.waitForLoadState('networkidle')
});

When('acesso o Gerenciamento de Temas', async function () {
    this.homePage = new HomePage(this.page)
    this.adminPage = new AdminPage(this.page)
    await this.homePage.admsite()
    await this.adminPage.acessarGerenciamentoTemas(this.usuarioAtual)
});

When('clico em Editar a variante desejada', async function () {
    this.themePage = new ThemePage(this.page)
    const nomeTema = this.usuarioAtual === 'adm' ? 'AdminLogo' : 'ClienteLogo'; 
    await this.themePage.acessarEdicaoVariante(nomeTema);
});

When('clico em Salvar', async function () {
    await this.themePage.salvarConfiguracoes()
});