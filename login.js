const config = require('./config');

const loginToLinkedIn = async (page) => {
  try {
    console.log('Navigating to LinkedIn login page...');
    await page.goto('https://www.linkedin.com/login', {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    });

    await page.waitForSelector('#username', { timeout: 60000 });
    await page.type('#username', config.email);
    await page.type('#password', config.password);

    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 120000 }),
    ]);

    console.log('Logged in successfully');
  } catch (error) {
    throw new Error('Failed to log in to LinkedIn: ' + error.message);
  }
};

module.exports = loginToLinkedIn;
