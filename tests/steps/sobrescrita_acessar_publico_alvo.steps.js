const { When } = require('@cucumber/cucumber');

When('clico no avatar do usuário sobrescrito {string}', async function (nomeUsuario) {

    const linha = this.page.locator('tr').filter({
        hasText: nomeUsuario
    });

    await linha.waitFor({
        state: 'visible',
        timeout: 15000
    });

    await linha.locator('span.userinitials').click();

    await this.page.waitForLoadState('networkidle');
});

