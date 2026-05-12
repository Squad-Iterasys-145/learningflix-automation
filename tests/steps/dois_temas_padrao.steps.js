const { Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

Then('a opção Tornar o tema padrão não é exibida no menu', async function () {
    const opcao = this.page.getByRole('menuitem', { name: 'Tornar o tema padrão' })
    await expect(opcao).not.toBeVisible()
})