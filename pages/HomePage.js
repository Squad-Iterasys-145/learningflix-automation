export class HomePage {
  constructor(page) {
    this.page = page;

    this.homeMenu = page.getByRole('link', { name: 'Página inicial' });

    // Admin (SELETOR ÚNICO E ESTÁVEL)
    this.adminMenu = page
  .locator('a.menu-admin')
  .filter({ hasText: /Administra/i })
  .first();

    // Cliente / Público-Alvo direto
    this.gerenciarPublicoAlvo = page.getByRole('link', {
      name: /Gerenciar Públicos?-Alvo/i
    });

    this.perfil = page.locator('#user-menu-toggle');
    this.changeTheme = page.getByRole('menuitem', { name: 'Trocar tema' });
    this.themeInput = page.getByRole('combobox');
    this.btncancel = page.locator('[data-action="cancel"]');
    this.btnsave = page.locator('[data-action="save"]');
  }

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