import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

import linkedinBot from './lib/LinkedIn.js';
import { GLOBAL_WAIT_TIME_FOR_SELECTORS } from './config/env.js';

//middlewares
puppeteer.use(StealthPlugin());

const app = async() => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 730});
  
  page.setDefaultNavigationTimeout(GLOBAL_WAIT_TIME_FOR_SELECTORS);

  try {
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
    );

    await linkedinBot(page);

  } catch (error) {
    console.error('An error occurred:', error);

  } finally {
    await browser.close();
  }
}

app();