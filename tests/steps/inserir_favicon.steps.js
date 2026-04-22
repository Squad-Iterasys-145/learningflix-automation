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
    //acessar o tema bucar pelo upload e deletar o arquivo
    await this.page.waitForLoadState('networkidle')
    const nomeTema =
      this.usuarioAtual === 'admin'
        ? 'AdminLogo'
        : 'ClienteLogo'

    await this.themePage.acessarEdicaoVariante(nomeTema);

    await this.themePage.removerFavicon()

    await this.themePage.salvarConfiguracoes()

})