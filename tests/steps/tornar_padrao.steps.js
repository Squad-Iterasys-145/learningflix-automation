const { When, Then } = require('@cucumber/cucumber')

When('clico no menu de ações do card do tema {string}', async function (temaName) {
    await this.page.waitForLoadState('networkidle')
    const card = this.page.locator('[data-themeid]')
        .filter({ has: this.page.locator('h5.card-title', { hasText: temaName }) })
    await card.locator('button[data-toggle="dropdown"]').first().click()
})

When('clico em Tornar o tema padrão', async function () {
    const opcao = this.page.getByRole('menuitem', { name: 'Tornar o tema padrão' })
    const opcaoVisivel = await opcao.isVisible()
    
    if (opcaoVisivel) {
        await opcao.click()
        await this.page.waitForLoadState('networkidle')
    }
    // Se não estiver visível o tema já é padrão — continua normalmente
})

Then('o tema {string} está marcado como padrão', async function (temaName) {
    const card = this.page
        .locator('[data-themeid]')
        .filter({ has: this.page.locator('h5.card-title', { hasText: temaName }) })
    await card.getByTitle('Tema padrão').waitFor()
})

