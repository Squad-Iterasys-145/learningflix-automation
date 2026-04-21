const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const LoginPage = require('../../pages/LoginPage')
const HomePage = require('../../pages/HomePage')
const AdminPage = require('../../pages/AdminPage')
const ThemePage = require('../../pages/ThemePage')




When('clico nos 3 pontinhos da variante deseja e em Pré-visualizar', async function (){
    this.themePage = new ThemePage(this.page)
    const nomeTema = this.usuarioAtual === 'admin' ? 'Treinamento Thamires' : 'Treinamento Thamires'; 
    await this.themePage.acessarPreVisualizacao(nomeTema)

})

When('observo o canto superior do menu lateral', async function (){
    await this.page.waitForLoadState('networkidle')
    

})
Then('o logo atribuido ao tema é exibido no menu lateral', async function (){
    const logoPreview = await this.themePage.validarLogoPreview()
    await expect(logoPreview).toHaveAttribute('src', /pluginfile\.php/, {timeout: 1000})
    await expect(logoPreview).not.toHaveAttribute('src', /theme\/image\.php/)

})