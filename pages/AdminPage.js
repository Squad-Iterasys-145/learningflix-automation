export class AdminPage {
  constructor(page) {
    this.page = page;

    this.plugins = page.locator('a[data-text="Plugins"]');
    this.aparencia = page.getByRole('link', { name: /Aparência/i });
  }

  // 🔥 APENAS UM MÉTODO
  async openPlugins() {
    await this.plugins.waitFor({ state: 'visible' });
    await this.plugins.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async temas() {
    await this.aparencia.waitFor({ state: 'visible' });
    await this.aparencia.click();
  }
}