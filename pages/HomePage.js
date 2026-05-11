class HomePage {
    constructor(page) {    
    this.page = page
    // Diego
    this.homeMenu = page.getByRole('link', { name: 'Página inicial' })
    this.admMenu = page.locator('a.menu-admin').filter({ visible: true })
    this.perfil = page.getByRole('button', { name: 'Menu do usuário' })
    this.changeTheme = page.getByRole('menuitem', { name: 'Trocar tema' })
    this.themeInput = page.getByRole('combobox')
    this.btncancel = page.locator('[data-action="cancel"]')
    this.btnsave = page.locator('[data-action="save"]')
    //this.direta = '/local/multithemes/#/'

    //Felipe
        // Admin (SELETOR ÚNICO E ESTÁVEL)
    this.adminMenu = page
     .locator('a.menu-admin')
     .filter({ hasText: /Administra/i })
     .first();

        // Cliente / Público-Alvo direto
    this.gerenciarPublicoAlvo = page.getByRole('link', {
      name: /Gerenciar Públicos?-Alvo/i
    });

  }

    //Diego
    async gohome() {
        await this.homeMenu.click()
    }

    async goadm() {
        await this.admMenu.click()
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
        await this.admMenu.click()
    }

    // async acessarUrlDireta(){
    //     await this.page.goto(this.direta)
    // }




    // Felipe

    // =========================
    // ACESSO ADMIN
    // =========================
    async acessarAdmin() {
        await this.adminMenu.first().waitFor({ state: 'visible' });

        await Promise.all([
        this.page.waitForLoadState('networkidle'),
        this.adminMenu.first().click()
        ]);
    }

    // =========================
    // ACESSO CLIENTE (DIRETO)
    // =========================
    async acessarGerenciarPublicoAlvo() {
        await this.gerenciarPublicoAlvo.waitFor({ state: 'visible' });
        await this.gerenciarPublicoAlvo.click();
  }


}

module.exports = HomePage