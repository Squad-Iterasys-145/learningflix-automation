const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const LoginPage = require('../../pages/LoginPage')
const HomePage = require('../../pages/HomePage')
const AdminPage = require('../../pages/AdminPage')
const ThemePage = require('../../pages/ThemePage')


Given('estou logado como cliente', async function () {
    this.usuarioAtual = 'cliente'
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
    await this.loginPage.login(
        process.env.CLIENT_USERNAME,
        process.env.CLIENT_PASSWORD
    )
    await this.loginPage.btnlogin()

})
When('clico em Editar a variante marcada como padrao', async function () {
    this.themePage = new ThemePage(this.page)
    this.temaAtual = 'Treinamento Thamires'

    await this.themePage.acessarExcluirInativar(this.temaAtual)
})
Then('A opcao Inativar nao deve ser exibida', async function () {
const botaoExcluir = this.page.getByRole('menuitem', { name: 'Inativar' })
    
    // Valida que ele não é visível
    await expect(botaoExcluir).not.toBeVisible()
})