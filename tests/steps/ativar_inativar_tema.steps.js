const { When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

When('clico em Inativar', async function () {
    await this.page.waitForTimeout(1000) 
    await this.page.locator('a.dropdown-item:visible', { hasText: 'Inativar' }).click()
    await this.page.waitForLoadState('networkidle')
})

When('clico em Ativar', async function () {
    await this.page.locator('a.dropdown-item:visible', { hasText: 'Ativar' }).click()
    await this.page.waitForLoadState('networkidle')
})

Then('o tema {string} está inativo', async function (temaName) {
    await this.page.getByText('Status do tema alterado para inativo!').waitFor()
})

Then('o tema {string} está ativo', async function (temaName) {
    await this.page.getByText('Status do tema alterado para ativo!').waitFor()
})