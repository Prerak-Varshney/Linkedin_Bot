export default async function gotoUrls(page, url) {
    try {
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 120000,
      });
    } catch (error) {
      console.error(`Error navigating to ${url}:`, error);
      throw error;
    }
  }
  