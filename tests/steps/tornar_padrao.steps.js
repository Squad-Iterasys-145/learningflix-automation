const { When, Then } = require('@cucumber/cucumber')

When('clico no menu de ações do card do tema {string}', async function (temaName) {
    await this.page.waitForLoadState('networkidle')
    const card = this.page.locator('[data-themeid]')
    .filter({ has: this.page.locator('h5.card-title', { hasText: temaName }) })
    await card.locator('button[data-toggle="dropdown"]').click()
})

When('clico em Tornar o tema padrão', async function () {
    await this.page.getByRole('menuitem', { name: 'Tornar o tema padrão' }).click()
    await this.page.waitForLoadState('networkidle')
})

Then('o tema {string} está marcado como padrão', async function (temaName) {
    await this.page.getByText('O tema foi definido como padrão com sucesso').waitFor()
    const card = this.page
        .locator('div[class*="card"]')
        .filter({ has: this.page.locator('h5.card-title', { hasText: temaName }) })
    await card.getByTitle('Tema padrão').waitFor()
})

