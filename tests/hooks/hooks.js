const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const path = require('path');
const dotenv = require('dotenv');

// força caminho absoluto baseado na raiz do projeto
dotenv.config({
  path: path.resolve(__dirname, '../../.env')
});

setDefaultTimeout(120000);

Before(async function () {
  console.log("BASE_URL HOOK:", process.env.BASE_URL);

  this.browser = await chromium.launch({ headless: false });

  const context = await this.browser.newContext({
    locale: 'en-US'
  });

  this.page = await context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === 'FAILED' && this.page) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }

  if (this.browser) {
    await this.browser.close();
  }
});