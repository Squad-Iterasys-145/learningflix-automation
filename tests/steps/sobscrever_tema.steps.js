const { When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

When('clico em Administração do site como Administrador Cliente', async function () {
    await this.page.locator('a[href*="client_admin.php"]').first().click()
    await this.page.waitForLoadState('networkidle')
})

When('acesso Gerenciar Usuários', async function () {
    await this.page.getByRole('link', { name: 'Gerenciar Usuários' }).click()
    await this.page.waitForLoadState('networkidle')
})

When('localizo e acesso o perfil do usuário {string}', async function (nomeUsuario) {
    const linha = this.page.locator('tr').filter({ hasText: nomeUsuario })
    await linha.locator('.btn-editform').click()
    // Aguarda o modal abrir e carregar
    await this.page.waitForLoadState('networkidle')
    await this.page.waitForTimeout(2000)
})

When('seleciono o tema {string} no campo Tema', async function (nomeTema) {
    // Busca o input dentro do elemento que tem o label Tema
    const campoTema = this.page.locator('[data-fieldtype="autocomplete"]').last()
    await campoTema.scrollIntoViewIfNeeded()
    await campoTema.click()
    await campoTema.fill(nomeTema)
    await this.page.waitForTimeout(1000)
    await this.page.locator('li[role="option"]', { hasText: nomeTema }).click()
    await this.page.waitForTimeout(500)
})

When('clico em Salvar mudanças do perfil', async function () {
    await this.page.locator('button[data-action="save"]').click()
    await this.page.waitForLoadState('networkidle')
})

When('clico no avatar do usuário {string}', async function (nomeUsuario) {
    await this.page.locator('a[href="https://homolog.learningflix.net/user/profile.php?id=64"]').click()
    await this.page.waitForLoadState('networkidle')
})

When('clico em Acessar como', async function () {
    await this.page.locator('span.d-none.d-md-inline-block', { hasText: 'Acessar como' }).click()
    await this.page.waitForLoadState('networkidle')
})

When('confirmo o acesso como usuário', async function () {
    await this.page.getByRole('button', { name: 'Continuar' }).click()
    await this.page.waitForLoadState('networkidle')
})

Then('o logo do footer corresponde ao tema {string}', async function (nomeTema) {
    await this.page.waitForLoadState('networkidle')
    const logoFooter = this.page.locator('img[src*="footerlogofile"]')
    await logoFooter.waitFor({ timeout: 60000 })
    const src = await logoFooter.getAttribute('src')
    expect(src).toContain('footerlogofile')
    expect(src).toContain('Logo.png')
})