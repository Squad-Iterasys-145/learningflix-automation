class ThemePage {
    constructor(page){
        this.page = page
        // Locators dinâmicos
        this.containerTema = (nome) => page.locator('.card-body').filter({ hasText: nome })
        this.botaoOpcoesDoTema = (nome) => this.containerTema(nome).locator('#dropdownMenuButton')
        this.linkVisualizar = page.getByRole('menuitem', {name: 'Pré-visualizar'})
        this.linkEditar = page.getByRole('menuitem', { name: 'Editar' })
        this.linkInativar = page.getByRole('menuitem', { name: 'Inativas' })
        this.linkExluir = page. getByRole('menuitem', { name: 'Excluir' })

        // Upload Logo
        this.botaoAbrirUploadLogo = page.locator('fieldset[id*="logoimagefile"]').getByRole('button', { name: 'Adicionar...' })
        this.botaoEnviarArquivo = page.locator('button.fp-upload-btn:has-text("Enviar este arquivo")')

        // Upload Favicon
        this.botaoAbrirUploadFav = page.locator('fieldset[id*="faviconimagefile"]').getByRole('button', { name: 'Adicionar...' })
        //this.botaoEnviarArquivoFav = page.locator('button.fp-upload-btn')


        // Salvar Tema
        this.botaoSalvarTema = page.locator('button.btn-primary:has-text("Salvar")')


    }

    async acessarEdicaoVariante(nomeDoTema) {
        await this.botaoOpcoesDoTema(nomeDoTema).click()
        await this.linkEditar.waitFor({ state: 'visible' })
        await this.linkEditar.click()
    }

    async acessarPreVisualizacao(nomeDoTema) {
        await this.botaoOpcoesDoTema(nomeDoTema).click()
        await this.linkVisualizar.waitFor({ state: 'visible'})
        await this.linkVisualizar.click()
    }

    async acessarExcluirInativar() {
    const cardPadrao = this.page.locator('.card.theme-default')
    const botaoMenu = cardPadrao.locator('#dropdownMenuButton')

    await botaoMenu.click()

    // Em vez de esperar pela classe .show (que às vezes oscila)
    // Esperamos que algum item comum do menu apareça, como o "Editar"
    await this.page.getByRole('menuitem', { name: 'Editar' }).waitFor({ state: 'visible' })
                
    }

    async realizarUploadLogo(nomeArquivo) {
        const caminho = `./data/${nomeArquivo}`
        await this.botaoAbrirUploadLogo.click()
        
        const inputFinal = this.page.locator('input[name="repo_upload_file"]')
        await inputFinal.setInputFiles(caminho)
        await this.botaoEnviarArquivo.click();
        await this.botaoEnviarArquivo.waitFor({ state: 'hidden' })
        await this.page.waitForLoadState('networkidle')
        //await this.page.waitForTimeout(1000)
    }

    async realizarUploadFavicon(nomeArquivo) {
        const caminho = `./data/${nomeArquivo}`
        await this.botaoAbrirUploadFav.click()
        
        const inputFinal = this.page.locator('input[name="repo_upload_file"]')
        await inputFinal.setInputFiles(caminho)

        await this.botaoEnviarArquivo.click()
        await this.botaoEnviarArquivo.waitFor({ state: 'hidden' })
        await this.page.waitForLoadState('networkidle')
        //await this.page.waitForTimeout(1000)
    }

    async salvarConfiguracoes() {
        await this.botaoSalvarTema.click({ force: true })
    }

    async validarLogoPreview() {
        const previewFrame = this.page.frameLocator('iframe').first();
        const logo = previewFrame.locator('img.logo').filter({ visible: true }).first()
        return logo
    }

    async removerFavicon() {
    const arquivo = this.page.getByText('cli.jpeg')

    await arquivo.waitFor({ state: 'visible' })
    await arquivo.click()

    await this.page.getByRole('button', { name: 'Excluir' }).click()

    await this.page.getByRole('button', { name: 'OK' }).click()
    await this.page.waitForLoadState('networkidle')
    }

    async removerLogo() {
    const arquivo = this.page.getByText('qa.jpeg')

    await arquivo.waitFor({ state: 'visible' })
    await arquivo.click()

    await this.page.getByRole('button', { name: 'Excluir' }).click()

    await this.page.getByRole('button', { name: 'OK' }).click()
    await this.page.waitForLoadState('networkidle')
    }

    async removerMime() {
    const arquivo = this.page.getByText('PDFlogo.jpeg')

    await arquivo.waitFor({ state: 'visible' })
    await arquivo.click()

    await this.page.getByRole('button', { name: 'Excluir' }).click()

    await this.page.getByRole('button', { name: 'OK' }).click()
    await this.page.waitForLoadState('networkidle')
    }


}
module.exports = ThemePage