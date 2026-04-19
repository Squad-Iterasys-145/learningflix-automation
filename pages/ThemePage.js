class ThemePage {
    constructor(page){
        this.page = page
        // Locators dinâmicos
        this.containerTema = (nome) => page.locator('.card-body').filter({ hasText: nome })
        this.botaoOpcoesDoTema = (nome) => this.containerTema(nome).locator('#dropdownMenuButton')
        this.linkEditar = page.getByRole('menuitem', { name: 'Editar' });

        // Upload
        this.botaoAbrirUploadLogo = page.locator('fieldset[id*="logoimagefile"]').getByRole('button', { name: 'Adicionar...' })
        this.botaoEnviarArquivo = page.locator('button.fp-upload-btn:has-text("Enviar este arquivo")')
        this.botaoSalvarTema = page.locator('button.btn-primary:has-text("Salvar")')
    }
    
    // Unificamos o nome aqui para bater com o Step
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

    async salvarConfiguracoes() {
        // O force: true mata o problema da máscara (lightbox)
        await this.botaoSalvarTema.click({ force: true });
    }


}
module.exports = {ThemePage}