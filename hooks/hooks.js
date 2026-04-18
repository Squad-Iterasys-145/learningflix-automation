import { Before, After, setDefaultTimeout }from '@cucumber/cucumber'
import { chromium } from 'playwright'
//require('dotenv').config();

setDefaultTimeout(60000); 

Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
    slowMo: 50
  });

  this.page = await this.browser.newPage();
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});