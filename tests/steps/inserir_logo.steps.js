const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../../pages/LoginPage')
const HomePage = require('../../pages/HomePage')
const AdminPage = require('../../pages/AdminPage')
const ThemePage = require('../../pages/ThemePage')

When('localizo o campo Logo e faço upload do arquivo', async function () {
    await this.themePage.realizarUploadLogo('qa.jpeg')
    await this.page.waitForLoadState('networkidle')
})

Then('o logo é salvo com sucesso', async function () {
    //acessar o tema bucar pelo upload e deletar o arquivo
    const nomeTema =
      this.usuarioAtual === 'admin'
        ? 'AdminLogo'
        : 'ClienteLogo'
    await this.page.waitForLoadState('networkidle')
    await this.themePage.acessarEdicaoVariante(nomeTema)

    await this.themePage.removerLogo()

    await this.themePage.salvarConfiguracoes()
})