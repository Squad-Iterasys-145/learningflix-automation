const { When, Then } = require('@cucumber/cucumber')

When('clico no menu de ações do tema {string}', async function (temaName) {
     await this.page.locator('[data-themeid]')
        .filter({ has: this.page.locator('h5.card-title', { hasText: temaName }) })
        .locator('[aria-label="Pré-visualizar"]')
        .click()
})


Then('sou redirecionado para a página de pré-visualização do tema', async function () {
    await this.page.waitForURL('**/local/multithemes/**')
})

When('clico no botão Sair da pré-visualização', async function () {
    await this.page.locator('[data-dismiss="modal"]').click()
    await this.page.waitForLoadState('networkidle')
})

Then('sou redirecionado para a página Gerenciamento de Temas', async function () {
    await this.page.waitForURL('**/local/multithemes/**')
})
       