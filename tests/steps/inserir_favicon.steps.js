const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../../pages/LoginPage')
const HomePage = require('../../pages/HomePage')
const AdminPage = require('../../pages/AdminPage')
const ThemePage = require('../../pages/ThemePage')


When('localizo o campo Favicon e faço upload do arquivo', async function () {
    this.themePage = new ThemePage(this.page)
    await this.themePage.realizarUploadFavicon('cli.jpeg')
});

Then('a favicon é salva com sucesso', async function () {
    // adicionar um assert para verificar a mensagem de sucesso
    // await expect(this.page.locator('.alert-success')).toBeVisible();
})