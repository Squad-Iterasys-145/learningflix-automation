const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../../pages/LoginPage')
const { time } = require('node:console') 
const { title } = require('node:process')

Given('que estou logado como Administrador', async function () {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
    await this.loginPage.login(
        process.env.ADMIN_USERNAME,
        process.env.ADMIN_PASSWORD
    )
    await this.loginPage.btnlogin()
    await this.page.waitForURL('**/my/**')
})


When('clico em Administração do site', async function () {
    await this.page.locator('a[href*="admin/search.php"]').first().click()
    await this.page.waitForURL('**/admin/**', {timeout: 15000})
})


When('clico na aba Aparência', async function () {
    await this.page.getByRole('tab', { name: 'Aparência' }).click()
    await this.page.waitForLoadState('networkidle')
})

When('clico em Gerenciamento de Temas', async function () {
    await this.page.getByRole('link', { name: 'Gerenciamento de Temas' }).click()
    await this.page.waitForLoadState('networkidle')
})


When('clico em Adicionar novo tema', async function () {
    await this.page.getByRole('button', { name: 'Adicionar novo tema' }).click()
    await this.page.waitForLoadState('networkidle')
})

When('clico no botão Adicionar', async function () {
     await this.page.locator('[data-action="save"]').click()
     await this.page.waitForLoadState('networkidle')
})

When('limpo e preencho o campo {string} com {string}', async function (campo, valor) {
    const input = this.page.getByLabel(campo)
    await input.clear()
    await input.fill(valor)
})

When('limpo o campo {string}', async function (campo) {
    const input = this.page.getByLabel(campo)
    await input.clear()
})

When('clico em Salvar mudanças', async function () {
    const btnSalvar = this.page.locator('button.btn-primary.mr-2')
    await btnSalvar.scrollIntoViewIfNeeded()
    await btnSalvar.click()
    await this.page.waitForLoadState('networkidle')
})

Then('o sistema retorna a mensagem {string}', async function (mensagem) {
    await this.page.getByText(mensagem).waitFor()
})

Then('o sistema exibe a mensagem {string}', async function (mensagem) {
    await this.page.getByText(mensagem).waitFor()
})