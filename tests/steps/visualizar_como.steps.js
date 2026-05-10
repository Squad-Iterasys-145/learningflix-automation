const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../../pages/HomePage')
const ThemePage = require('../../pages/ThemePage');
const UserManagementPage = require('../../pages/UserManagementPage');
const LoginPage = require('../../pages/LoginPage');
        
Given('estou acessando como cliente', async function (){
    this.usuarioAtual = 'cliente'
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
    await this.loginPage.login(
        process.env.CLIENT_USERNAME,
        process.env.CLIENT_PASSWORD
    )
    await this.loginPage.btnlogin()

})

When('acesso a pagina gerenciar usuarios', async function () {
    this.userManagementPage = new UserManagementPage(this.page);
    await this.userManagementPage.acessarGerenciarUsuarios();
})

When('seleciono o usuario Aluno Iterasys com um tema atribuido', async function (){
    await this.page.waitForLoadState('networkidle')
    await this.userManagementPage.selecionarusuario()
    
})
When('utilizo a funcionalidade acessar como para esse usuario', async function (){
    await this.page.waitForLoadState('networkidle')
    await this.userManagementPage.acessarcomo()
})
When('acesso a pagina inicial', async function (){
    this.homePage = new HomePage(this.page)
    await this.homePage.gohome()
    
})
Then('a interface deve refletir o tema atribuido', async function (){
    const logoPreview = this.page.locator('img.logo').first();
    await expect(logoPreview).toHaveAttribute('src', /pluginfile\.php/, {timeout: 1000})
    await expect(logoPreview).not.toHaveAttribute('src', /theme\/image\.php/)

    
})