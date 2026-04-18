const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
require('dotenv').config();

setDefaultTimeout(120000);

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  const context = await this.browser.newContext({
    locale: 'en-US'
  });
  this.page = await context.newPage();
});

After(async function (scenario) {
    if (scenario.result.status === 'FAILED') {
        const screenshot = await this.page.screenshot()
        await this.attach(screenshot, 'image/png')
    }
    await this.browser.close()
})