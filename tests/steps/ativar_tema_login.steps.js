const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Then('devo visualizar o logo do tema adminLogo', async function () {

  const logo = this.page.locator('img.logo').first();

  await logo.waitFor({
    state: 'visible',
    timeout: 15000
  });

  await expect(logo).toHaveAttribute(
    'src',
    /logoimagefile|pluginfile/
  );
});
