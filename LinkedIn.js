const puppeteer = require('puppeteer');
const config = require('./config');
const loginToLinkedIn = require('./login');
const searchJobs = require('./searchJobs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 730});
  page.setDefaultNavigationTimeout(120000);

  try {
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
    );

    // Login to LinkedIn
    await loginToLinkedIn(page);

    // Search for jobs
    await searchJobs(page, config);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await browser.close();
  }
})();
