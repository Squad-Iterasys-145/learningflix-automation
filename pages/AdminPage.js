class AdminPage {
    constructor(page) {
    this.page = page
    this.abaPlugins = page.locator('[data-text="Plugins"]')
    this.abaAparencia = page.locator('[data-text="Aparência"]')
    this.linkTemaAdmin = page.getByRole('link', { name: 'Gerenciamento de Temas' })
    this.linkTemaCliente = page.getByRole('link', { name: 'Gerenciar Temas' })
    this.publicoAlvo = this.page.getByRole('link', { name: /Gerenciar Públicos?-Alvo/i})

    }
    // Diego
    async acessarGerenciamentoTemas(usuario) {
        if (usuario === 'adm') {
            await this.abaAparencia.click()
            await this.linkTemaAdmin.click()
        } else {
            await this.linkTemaCliente.click()
        }
    }
    // Felipe
    async openPlugins() {
    await this.abaPlugins.waitFor()
    await this.abaPlugins.click()
    }

    async openPublicoAlvo() {
    await this.publicoAlvo.waitFor()
    await this.publicoAlvo.scrollIntoViewIfNeeded()
    await this.publicoAlvo.click()
  }
  
}

module.exports = AdminPage