class HomePage {
    constructor(page) {
    this.page = page
    this.homeMenu = page.getByRole('link', { name: 'Página inicial' })
    this.adminMenu = page.locator('a.menu-admin').filter({ visible: true })
    this.perfil = page.getByRole('button', { name: 'Menu do usuário' })
    this.changeTheme = page.getByRole('menuitem', { name: 'Trocar tema' })
    this.themeInput = page.getByRole('combobox')
    this.btncancel = page.locator('[data-action="cancel"]')
    this.btnsave = page.locator('[data-action="save"]')
    
    }
    async goadm() {
        await this.adminMenu.click()
    }

    async trocartema() {
        await this.perfil.click()
        await this.changeTheme.click()
    }

    async escolhertema(){
        await this.themeInput.click()
        await this.themeInput.fill('Teste Thamires')
        const option = this.page.getByRole('option', { name: 'Teste Thamires' })
        await option.click()
    }

    async aplicartema(){
        await this.btnsave.click()
    }

    async admsite(){
        await this.adminMenu.click()
    }


}

module.exports = {HomePage}