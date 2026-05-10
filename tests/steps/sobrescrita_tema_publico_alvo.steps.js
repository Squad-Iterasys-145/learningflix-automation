const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Then('devo visualizar o logo do tema aplicado corretamente', async function () {

  const logo = this.page.locator('img.logo').first();

  await logo.waitFor({
    state: 'visible',
    timeout: 15000
  });

  await expect(logo).toBeVisible();

  const src = await logo.getAttribute('src');

  expect(src).toContain('CAPACLI.png');
});