const { expect } = require('@playwright/test');

class PublicoAlvoPage {

  constructor(page) {
    this.page = page;

    
    // MENU
    this.menuPublico = page.getByRole('link', {
      name: /Gerenciar Públicos?-Alvo|Público-Alvo/i
    });

    
    // LISTA PÚBLICO-ALVO
    this.titulo = page.locator('h2', { hasText: 'Público-Alvo' });

    this.btnAdicionar = page.getByRole('link', {
      name: /Adicionar público-alvo/i
    });

    
    // FORMULÁRIO
    this.inputNome = page.locator('#name');
    this.dropdownPerfil = page.locator('.multiselect__tags');
    this.btnSalvar = page.locator('button.btn-primary.mr-2');

    
    // MEMBROS
    this.btnGerenciarMembros = page.locator(
      'a[title="Gerenciar membros do público-alvo"]'
    );

    this.listaDisponivel = page
     .locator('div.list-box-item')
     .filter({ has: page.locator('.search-box') })
     .locator('ul.list-box');

    this.listaGrupo = page
      .locator('div.list-box-item')
      .filter({ has: page.locator('.bulk-action') })
      .locator('ul.list-box');

    this.containerAcoes = this.page.locator('div.actions');

    this.usuarioNoGrupo = (nome) =>
      this.listaGrupo.locator('li.list-item', { hasText: nome });

    this.btnAdicionarUsuario = page
      .locator('.actions button')
      .first();

    this.btnRemoverUsuario = page
      .locator('button.btn-primary')
      .last();

    // BOTÃO MAIS SEGURO PARA REMOVER SELECIONADO
    this.btnRemoverSelecionado = this.containerAcoes
    .locator('button')
    .nth(2);

    //  INPUT BUSCA (corrigido)
    this.inputBuscaUsuario = page
      .locator('input[placeholder="Pesquisar"]')
      .first();
  
  
    // BUSCA
    this.inputBuscaPublico = this.page
      .locator('label:has-text("Pesquisar") input[type="search"]')
      .first();
    this.linhasTabela = this.page.locator('table tbody tr');
  
    }

 
  // ACESSO
  async acessarModulo() {
    await this.menuPublico.waitFor({ state: 'visible' });
    await this.menuPublico.scrollIntoViewIfNeeded();
    await this.menuPublico.click();
    await this.titulo.waitFor({ state: 'visible' });
  }

  async clicarAdicionar() {
    await this.btnAdicionar.waitFor({ state: 'visible' });
    await this.btnAdicionar.click();
  }

  async preencherNome(nome) {
  await this.inputNome.waitFor({ state: 'visible' });

  await this.inputNome.click();
  await this.inputNome.fill('');
  await this.inputNome.fill(nome);
}

  async selecionarPerfil(perfil) {
    await this.dropdownPerfil.click();

    const optionPerfil = this.page
      .locator('.multiselect__option')
      .filter({ hasText: perfil });

    await optionPerfil.first().click();

    const containerTema = this.page.locator('.multiselect__tags').last();
    await containerTema.click();

    const inputTema = this.page.locator('input.multiselect__input').last();
    await inputTema.waitFor({ state: 'attached' });

    await inputTema.fill(perfil);
    await inputTema.press('Enter');
  }

  async salvar() {
    await this.btnSalvar.waitFor({ state: 'visible' });
    await this.btnSalvar.click();
  }

  async validarPublicoCriado(nome) {
    const linha = this.page.locator('tr', { hasText: nome });
    await linha.waitFor({ state: 'visible', timeout: 15000 });
  }

  
  // MEMBROS
  async abrirGerenciarMembros(nomePublico) {
    const linha = this.page.locator('tr', { hasText: nomePublico });
    const botao = linha.locator('a[title="Gerenciar membros do público-alvo"]');

    await botao.waitFor({ state: 'visible' });
    await botao.click();

    await expect(this.page).toHaveURL(/members/i, { timeout: 15000 });

    await this.listaDisponivel.first().waitFor({ state: 'visible' });
  }

  async adicionarUsuario(nome) {

  await this.listaDisponivel.first().waitFor({ state: 'visible', timeout: 15000 });

  await this.inputBuscaUsuario.fill(nome);
  await this.page.waitForTimeout(300);

  const usuario = this.page
    .locator('li.list-item', { hasText: nome })
    .first();

  await usuario.waitFor({ state: 'visible', timeout: 15000 });
  await usuario.click({ force: true });

  await this.page.waitForTimeout(300);

  // BOTÃO CERTO
  const btnAdicionar = this.containerAcoes
  .locator('button')
  .nth(0); //  botão correto (direita → esquerda)

  await btnAdicionar.waitFor({ state: 'visible', timeout: 15000 });
  await btnAdicionar.click();
}
  async salvarMembros() {
  const btnSalvar = this.page.locator('button.btn.btn-primary.mr-2');

  await btnSalvar.scrollIntoViewIfNeeded();
  await btnSalvar.waitFor({ state: 'visible', timeout: 15000 });
  await btnSalvar.click();
}

  async voltarParaGerenciarMembros(nomePublico) {
    await this.abrirGerenciarMembros(nomePublico);
  }

  async validarUsuarioNoGrupo(nome) {
    await expect(
      this.listaGrupo.locator('li.list-item', { hasText: nome }).first()
    ).toBeVisible();
  }

  async removerUsuario(nome) {

  const usuario = this.usuarioNoGrupo(nome).first();
  await usuario.waitFor({ state: 'visible', timeout: 15000 });
  await usuario.click({ force: true });

  await this.btnRemoverSelecionado.waitFor({ state: 'visible', timeout: 15000 });
  await this.btnRemoverSelecionado.click();
}

async validarUsuarioNaoEstaNoGrupo(nome) {
  return this.listaGrupo.locator('li.list-item', { hasText: nome });
}

async excluirPublico(nomePublico) {

  const linha = this.page.locator('tr', { hasText: nomePublico });

  const btnExcluir = linha.locator('button[title="Excluir público-alvo"]');

  await btnExcluir.waitFor({ state: 'visible', timeout: 15000 });
  await btnExcluir.click();

  
  // AGUARDA MODAL DE CONFIRMAÇÃO
  const btnConfirmar = this.page.locator('button.btn.btn-primary', {
    hasText: 'Confirmar'
  });

  await btnConfirmar.waitFor({ state: 'visible', timeout: 10000 });

  await btnConfirmar.click();

  
  // GARANTE QUE O MODAL SUMIU
await btnConfirmar.waitFor({ state: 'hidden', timeout: 10000 });
}

async validarPublicoNaoExiste(nomePublico) {

  // garante atualização da tela
  await this.page.reload();

  const linha = this.page.locator('tr', { hasText: nomePublico });

  await expect.poll(async () => {
    return await linha.count();
  }, {
    timeout: 15000,
    message: 'Público-alvo ainda aparece após exclusão'
  }).toBe(0);
}

async buscarPublico(nome) {

  await this.inputBuscaPublico.waitFor({ state: 'visible', timeout: 15000 });

  await this.inputBuscaPublico.fill(nome);

  // aguarda filtro aplicar
  await this.page.waitForTimeout(500);
}

async validarBuscaPublico(nome) {

  const linhas = this.linhasTabela;

  await expect(linhas).toHaveCount(1);

  await expect(linhas.first()).toContainText(nome);
}

async editarPublico(nomePublico) {

  const linha = this.page.locator('tr', { hasText: nomePublico });

  await linha.waitFor({ state: 'visible', timeout: 15000 });

  const btnEditar = linha.locator('a[title="Editar público-alvo"]');

  await btnEditar.waitFor({ state: 'visible', timeout: 15000 });
  await btnEditar.click();

  // garante que entrou na tela de edição
  await this.inputNome.waitFor({ state: 'visible', timeout: 15000 });
}

async atualizarPublico() {
  const btn = this.page.getByRole('button', {
    name: /Atualizar público-Alvo/i
  });

  await btn.waitFor({ state: 'visible', timeout: 15000 });
  await btn.click();

  // garante que voltou pra lista
  await this.titulo.waitFor({ state: 'visible', timeout: 15000 });
}

}

module.exports = PublicoAlvoPage;