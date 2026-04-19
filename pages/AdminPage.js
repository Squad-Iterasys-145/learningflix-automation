class AdminPage {
    constructor(page) {
    this.page = page
    this.abaPlugins = page.locator('[data-text="Plugins"]')
    this.abaAparencia = page.locator('[data-text="Aparência"]')
    this.linkTemaAdmin = page.getByRole('link', { name: 'Gerenciamento de Temas' });
    this.linkTemaCliente = page.getByRole('link', { name: 'Gerenciar Temas' });

    }

    async acessarGerenciamentoTemas(usuario) {
        if (usuario === 'admin') {
            await this.abaAparencia.click();
            await this.linkTemaAdmin.click();
        } else {
            await this.linkTemaCliente.click();
        }
    }
}

module.exports = AdminPage