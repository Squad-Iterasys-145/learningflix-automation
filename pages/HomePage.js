export class HomePage {
  constructor(page) {
    this.page = page;

    this.homeMenu = page.getByRole('link', { name: 'Página inicial' });

    // 🔥 CORRIGIDO (evita duplicidade)
    this.adminMenu = page.locator(
    'a.menu-admin[aria-label="Administração do site"]'
  );

    this.perfil = page.getByRole('button', { name: 'Menu do usuário' });
    this.changeTheme = page.getByRole('menuitem', { name: 'Trocar tema' });
    this.themeInput = page.getByRole('combobox');
    this.btncancel = page.locator('[data-action="cancel"]');
    this.btnsave = page.locator('[data-action="save"]');
  }

  // 🔥 APENAS UM MÉTODO
  async openAdmin() {
    await this.adminMenu.waitFor({ state: 'visible' });
    await this.adminMenu.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async trocartema() {
    await this.perfil.click();
    await this.changeTheme.click();
  }

  async escolhertema() {
    await this.themeInput.click();
    await this.themeInput.fill('Teste Thamires');

    const option = this.page.getByRole('option', {
      name: 'Teste Thamires'
    });

    await option.waitFor({ state: 'visible' });
    await option.click();
  }

  async aplicartema() {
    await this.btnsave.click();
  }
}