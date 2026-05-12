const { expect } = require('@playwright/test');

class UserManagementPage {
  constructor(page) {
    this.page = page;

    // MENU
    this.menuUsuarios = page
     .locator('a[href*="/admin/tool/usermanagement/index.php"]')
     .filter({ hasText: 'Gerenciar Usuários' })
     .first();

    // PÁGINA
    this.mainContent = page.locator('#maincontent');

    // EDITAR USUÁRIO
    this.btnEditarUsuario = (nome) =>
    this.page
      .locator('tr', { hasText: nome })
      .locator('a.btn-editform');

    this.modalEditar = this.page.locator('h5', {
      hasText: 'Editar usuário'
    });

    // TEMA
    this.inputTema = this.page
      .locator('input[data-fieldtype="autocomplete"]')
      .last();

    this.setaTema = this.page.locator('span.form-autocomplete-downarrow').first();

    this.opcaoTema = (nome) =>
      this.page.locator('li[role="option"]', { hasText: nome });

    // SALVAR
    this.btnSalvar = this.page.locator('button[data-action="save"]');

    // ACESSA USUARIO
    this.alunoiterasys = this.page.locator('a[href*="/user/profile.php?id=64"]')

    this.btnacessarcomo = this.page.getByRole('link', { name: 'Acessar como...' })
  }
  
  async acessarGerenciarUsuarios() {

  await this.page
    .locator('a.menu-admin[href*="client_admin.php"]')
    .first()
    .click();

  await this.menuUsuarios.waitFor({
    state: 'visible'
  });

  await this.menuUsuarios.click();

  await this.mainContent.waitFor({
    state: 'visible'
  });
}

 async abrirEdicaoUsuario(username) {

  const linhaUsuario = this.page.locator('tr', {
    has: this.page.locator('td', { hasText: username })
  });

  const btnEditar = linhaUsuario.locator('a.btn-editform').first();

  await linhaUsuario.waitFor({ state: 'visible', timeout: 15000 });
  await btnEditar.click();

  await this.modalEditar.waitFor({ state: 'visible' });
}

 async selecionarTema(nomeTema) {

  await this.inputTema.waitFor({
    state: 'visible'
  });

  await this.inputTema.click();

  await this.inputTema.fill(nomeTema);

  const opcaoTema = this.page.locator(
    'li[role="option"]',
    { hasText: nomeTema }
  );

  await opcaoTema.waitFor({
    state: 'visible'
  });

  await opcaoTema.click();
}
  async salvarUsuario() {
    await expect(this.modalEditar).toBeVisible();

    await this.btnSalvar.click();

    await this.modalEditar.waitFor({ state: 'hidden', timeout: 10000 });
  }

  async selecionarusuario() {
    await expect(this.alunoiterasys).toBeVisible()
    await this.alunoiterasys.click()
  }

  async acessarcomo(){
    await expect(this.btnacessarcomo).toBeVisible()
    await this.btnacessarcomo.click()
  }

 async inativarUsuario(nomeUsuario) {

  const botaoInativar = this.page.locator(
    `tr:has-text("${nomeUsuario}") a[title="Suspender conta de usuário"]`
  );

  await botaoInativar.click();

  // espera botão desaparecer ou linha atualizar
  await this.page.waitForTimeout(1500);

  // opcional: garantir que ainda está na tela
  await this.page.waitForLoadState('domcontentloaded');
}
}

module.exports = UserManagementPage;