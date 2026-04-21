export class AdminPage {
  constructor(page) {
    this.page = page;

    this.plugins = this.page.locator('a[data-text="Plugins"]');
    this.publicoAlvo = this.page.getByRole('link', {
        name: /Gerenciar Públicos?-Alvo/i
});
  }

  async openPlugins() {
    await this.plugins.waitFor();
    await this.plugins.click();
  }

  async openPublicoAlvo() {
    await this.publicoAlvo.waitFor();
    await this.publicoAlvo.scrollIntoViewIfNeeded();
    await this.publicoAlvo.click();
  }
}