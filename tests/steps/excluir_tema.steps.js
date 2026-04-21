const { When, Then } = require('@cucumber/cucumber')

When('clico em Excluir', async function () {
    await this.page.locator('a.dropdown-item:visible', { hasText: 'Excluir' }).click()
    await this.page.waitForLoadState('networkidle')
})

When('confirmo a exclusão', async function () {
    await this.page.locator('[data-action="save"]').click()
    await this.page.waitForLoadState('networkidle')
})

Then('o tema {string} não aparece na listagem', async function (temaName) {
    const tema = this.page.locator('[data-themeid]')
        .filter({ has: this.page.locator('h5.card-title', { hasText: temaName }) })
    await tema.waitFor({ state: 'hidden', timeout: 10000 })
})