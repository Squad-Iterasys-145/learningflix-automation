export class HomePage {
    constructor(page) {
    this.page = page
    this.homeMenu = page.getByRole('link', { name: 'Página inicial' })
    this.adminMenu = page.getByRole('link', { name: 'Administração do site' })
    this.perfil = page.locator('#user-menu-toggle')
    this.changeTheme = page.getByRole('menuitem', { name: 'Trocar tema' })
    this.themeInput = page.getByRole('combobox')
    this.btncancel = page.locator('[data-action="cancel"]')
    this.btnsave = page.locator('[data-action="save"]')
    
    }
}