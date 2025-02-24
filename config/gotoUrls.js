import { GLOBAL_WAIT_TIME_FOR_SELECTORS } from "../constants/exports.js";
const gotoUrls = async(page, url, timeOut=GLOBAL_WAIT_TIME_FOR_SELECTORS) => {
  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: timeOut,
    });

  } catch (error) {
    console.error(`Error navigating to ${url}:`, error);
    throw error;
  }
}

export default gotoUrls;