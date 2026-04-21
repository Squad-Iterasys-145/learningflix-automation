const { chromium } = require('playwright');

class HomePage {
    constructor(page) {
        this.page = page

        // Admin (SELETOR ÚNICO E ESTÁVEL)
        this.adminMenu = page
            .locator('a.menu-admin')
            .filter({ hasText: /Administra/i })
            .first();

        // Diego
        this.homeMenu = page.getByRole('link', { name: 'Página inicial' })
        this.perfil = page.locator('#user-menu-toggle')
        this.changeTheme = page.getByRole('menuitem', { name: 'Trocar tema' })
        this.themeInput = page.getByRole('combobox')
        this.btncancel = page.locator('[data-action="cancel"]')
        this.btnsave = page.locator('[data-action="save"]')

        // Felipe
        this.gerenciarPublicoAlvo = page.getByRole('link', {
            name: /Gerenciar Públicos?-Alvo/i
        });
    }

    // ACESSO ADMIN
    async acessarAdmin() {
        await this.adminMenu.first().waitFor({ state: 'visible' });
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.adminMenu.first().click()
        ]);
    }

    // Diego
    async goadm() {
        await this.adminMenu.click()
    }

    async trocartema() {
        await this.perfil.click()
        await this.changeTheme.click()
    }

    async escolhertema() {
        await this.themeInput.click()
        await this.themeInput.fill('Teste Thamires')
        const option = this.page.getByRole('option', { name: 'Teste Thamires' })
        await option.click()
    }

    async aplicartema() {
        await this.btnsave.click()
    }

    // Felipe
    async acessarGerenciarPublicoAlvo() {
        await this.gerenciarPublicoAlvo.waitFor({ state: 'visible' });
        await this.gerenciarPublicoAlvo.click();
    }
}

module.exports = HomePage