const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Then('devo ver a página de acesso negado ou tema padrão do sistema', async function () {

  const logo = this.page.locator('img.logo').first();

  await expect(logo).toBeVisible({ timeout: 15000 });

  const src = await logo.getAttribute('src');

  // aceita dois comportamentos possíveis do sistema
  const isBlockedOrDefault =
    src.includes('theme/image.php') ||
    src.includes('login') ||
    src.includes('access');

  expect(isBlockedOrDefault).toBeTruthy();
});