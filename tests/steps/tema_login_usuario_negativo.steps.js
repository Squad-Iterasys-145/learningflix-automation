const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Then('devo visualizar o tema padrão do sistema', async function () {

  const logo = this.page.locator('img.logo').first();

  await expect(logo).toBeVisible({ timeout: 15000 });

  const src = await logo.getAttribute('src');

  // valida comportamento
  expect(src).not.toContain('qa.jpeg');
  expect(src).toContain('theme/image.php');
});