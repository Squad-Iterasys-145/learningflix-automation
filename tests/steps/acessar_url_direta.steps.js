const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const LoginPage = require('../../pages/LoginPage')
const HomePage = require('../../pages/HomePage')
const AdminPage = require('../../pages/AdminPage')
const ThemePage = require('../../pages/ThemePage')
       
       
       
Given('que faço login como usuario não administrador', async function () {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
        await this.loginPage.login(
        process.env.ALUNO_USERNAME,
        process.env.ALUNO_PASSWORD
    )
    await this.loginPage.btnlogin()
})

When('tento acessar a {string} diretamente', async function (url) {
    await this.page.goto(url)
})

Then('o sistema deve exibir a mensagem de acesso negado', async function () {
    this.themePage = new ThemePage(this.page)
    await expect(this.themePage.errorMsg).toContainText('não tem permissão')
})

Then('ao clicar no botao continuar devo retornar para a home', async function () {
    this.themePage = new ThemePage(this.page)
    await this.themePage.clicarBtnContinuar()
    await this.page.waitForLoadState('networkidle')
    await expect(this.page).not.toHaveURL(/.*multithemes/)

})