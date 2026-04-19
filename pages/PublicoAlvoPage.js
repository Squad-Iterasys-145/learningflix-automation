export class PublicoAlvoPage {
  constructor(page) {
    this.page = page;

    // Navegação
    this.menuPublico = page.getByRole('link', { name: /Público-Alvo/i });

    // Tela lista
    this.titulo = page.getByRole('heading', { name: 'Público-Alvo' });
    this.btnAdicionar = page.getByRole('button', {
      name: /Adicionar público-alvo/i
    });

    // Formulário
    this.inputNome = page.locator('#name');
    this.dropdownPerfil = page.locator('.multiselect__tags');
    this.opcaoPerfil = (perfil) =>
      page.locator('.multiselect__option', { hasText: perfil });

    // Ações
    this.btnAdicionar = page.locator('a[href="#/create"]');  
    this.btnSalvar = page.locator('button.btn-primary.mr-2');
  }

  async acessarModulo() {
    await this.menuPublico.waitFor({ state: 'visible' });
    await this.menuPublico.click();
    await this.titulo.waitFor({ state: 'visible' });
  }

  async clicarAdicionar() {
    await this.btnAdicionar.waitFor({ state: 'visible' });
    await this.btnAdicionar.click();
  }

  async preencherNome(nome) {
    await this.inputNome.waitFor({ state: 'visible' });
    await this.inputNome.fill(nome);
  }

  async selecionarPerfil(perfil) {
  await this.dropdownPerfil.click();

  // espera o DOM estabilizar o dropdown
  await this.page.waitForTimeout(300);

  const option = this.page
    .locator('.multiselect__option')
    .filter({ hasText: perfil });

  await option.first().scrollIntoViewIfNeeded();
  await option.first().click();
}

  async salvar() {
    await this.btnSalvar.waitFor({ state: 'visible' });
    await this.btnSalvar.click();
  }

  async validarCriacao(nome) {
    await this.page.getByText(nome).waitFor({ state: 'visible' });
  }
}