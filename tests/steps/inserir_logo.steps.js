const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../../pages/LoginPage')
const HomePage = require('../../pages/HomePage')
const AdminPage = require('../../pages/AdminPage')
const ThemePage = require('../../pages/ThemePage')

When('localizo o campo Logo e faço upload do arquivo', async function () {
    await this.themePage.realizarUploadLogo('qa.jpeg')
})

Then('o logo é salvo com sucesso', async function () {
    // adicionar um assert para verificar a mensagem de sucesso
    // await expect(this.page.locator('.alert-success')).toBeVisible();
})