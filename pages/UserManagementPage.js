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


}

module.exports = UserManagementPage;