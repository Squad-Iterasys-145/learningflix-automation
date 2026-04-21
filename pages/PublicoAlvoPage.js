export class PublicoAlvoPage {
  constructor(page) {
    this.page = page;

    // Menu (serve para admin e cliente)
    this.menuPublico = page.getByRole('link', {
      name: /Gerenciar Públicos?-Alvo|Público-Alvo/i
    });

    // Tela lista
    this.titulo = page.locator('h2', { hasText: 'Público-Alvo' });

    this.btnAdicionar = page.getByRole('link', {
      name: /Adicionar público-alvo/i
    });

    // Formulário
    this.inputNome = page.locator('#name');
    this.dropdownPerfil = page.locator('.multiselect__tags');

    // botão MAIS específico (evita conflito que você teve)
    this.btnSalvar = page.locator('button.btn-primary.mr-2');
  }

  // =========================
  // ACESSO (ADMIN OU CLIENTE)
  // =========================

  async acessarModulo() {
    await this.menuPublico.waitFor({ state: 'visible' });
    await this.menuPublico.scrollIntoViewIfNeeded();
    await this.menuPublico.click();
    await this.titulo.waitFor({ state: 'visible' });
  }

  // =========================
  // AÇÕES
  // =========================

  async clicarAdicionar() {
    await this.btnAdicionar.waitFor({ state: 'visible' });
    await this.btnAdicionar.click();
  }

  async preencherNome(nome) {
    await this.inputNome.waitFor({ state: 'visible' });
    await this.inputNome.fill(nome);
  }

 async selecionarPerfil(perfil) {
  // 1. abre dropdown de perfil
  await this.dropdownPerfil.click();

  // 2. seleciona "Tema"
  const optionPerfil = this.page
    .locator('.multiselect__option')
    .filter({ hasText: perfil });

  await optionPerfil.first().click();

  // 3. AGORA vem o ponto crítico:
  // clicar no CONTAINER do segundo multiselect (onde aparece "Pesquise...")

  const containerTema = this.page.locator('.multiselect__tags').last();

  await containerTema.click();

  // 4. agora o input aparece de verdade
  const inputTema = this.page.locator('input.multiselect__input').last();

  await inputTema.waitFor({ state: 'attached' });

  // 5. digita o tema
  await inputTema.fill(perfil);

  // 6. confirma (Enter igual usuário real)
  await inputTema.press('Enter');

}

  async salvar() {
    await this.btnSalvar.waitFor({ state: 'visible' });
    await this.btnSalvar.click();
  }
}