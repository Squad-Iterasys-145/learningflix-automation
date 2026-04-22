const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../../pages/LoginPage')
const HomePage = require('../../pages/HomePage')
const AdminPage = require('../../pages/AdminPage')
const ThemePage = require('../../pages/ThemePage')


Given('que estou logado como administrador', async function () {
    this.usuarioAtual = 'admin'
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
    await this.loginPage.login(
        process.env.ADMIN_USERNAME,
        process.env.ADMIN_PASSWORD
    )
    await this.loginPage.btnlogin()

})
When('clico em Editar na variante desejada', async function () {
    this.themePage = new ThemePage(this.page)
    this.temaAtual = 'MimeType'

    await this.themePage.acessarEdicaoVariante(this.temaAtual)
})

When('e faço upload de um arquivo renomeado para .jpeg e clico em salvar', async function () {
    await this.themePage.realizarUploadLogo('PDFlogo.jpeg')
    await this.page.waitForLoadState('networkidle')
    await this.themePage.salvarConfiguracoes()
})

Then('não exibe bloqueio para arquivo com formato interno inválido', async function () {
    //acessar o tema bucar pelo upload e deletar o arquivo
    await this.page.waitForLoadState('networkidle')
    await this.themePage.acessarEdicaoVariante('MimeType')
    await this.themePage.removerMime()
    await this.themePage.salvarConfiguracoes()
})