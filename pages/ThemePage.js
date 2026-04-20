class ThemePage {
    constructor(page){
        this.page = page
        // Locators dinâmicos
        this.containerTema = (nome) => page.locator('.card-body').filter({ hasText: nome })
        this.botaoOpcoesDoTema = (nome) => this.containerTema(nome).locator('#dropdownMenuButton')
        this.linkEditar = page.getByRole('menuitem', { name: 'Editar' });

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
        await this.botaoOpcoesDoTema(nomeDoTema).click();
        await this.linkEditar.waitFor({ state: 'visible' });
        await this.linkEditar.click();
    }

    async realizarUploadLogo(nomeArquivo) {
        const caminho = `./data/${nomeArquivo}`;
        await this.botaoAbrirUploadLogo.click();
        
        const inputFinal = this.page.locator('input[name="repo_upload_file"]');
        await inputFinal.setInputFiles(caminho);

        await this.botaoEnviarArquivo.click();
        await this.botaoEnviarArquivo.waitFor({ state: 'hidden' });
        await this.page.waitForTimeout(1000);
    }

    async realizarUploadFavicon(nomeArquivo) {
        const caminho = `./data/${nomeArquivo}`;
        // await this.botaoAbrirUploadFav.scrollIntoViewIfNeeded()
        // await this.botaoAbrirUploadFav.waitFor({ state: 'visible' });
        await this.botaoAbrirUploadFav.click();
        
        const inputFinal = this.page.locator('input[name="repo_upload_file"]');
        await inputFinal.setInputFiles(caminho);

        await this.botaoEnviarArquivo.click();
        await this.botaoEnviarArquivo.waitFor({ state: 'hidden' });
        await this.page.waitForTimeout(1000);
    }

    async salvarConfiguracoes() {
        // O force: true mata o problema da máscara (lightbox)
        await this.botaoSalvarTema.click({ force: true });
    }


}
module.exports = ThemePage