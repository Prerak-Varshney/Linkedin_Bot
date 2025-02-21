import { LOGIN_URL } from '../constants/urls.js';
import { buttonClasses } from '../constants/buttons.js';
import handleGotoUrls from '../config/handleGotoUrls.js';
import { AUTH_EMAIL, AUTH_PASSWORD, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS, GLOBAL_WAIT_TIME_FOR_SELECTORS } from '../config/env.js';


export default async function loginToLinkedIn( page ){
  try {
    console.log('Navigating to LinkedIn login page...');

    //Handle URL
    await handleGotoUrls(page, LOGIN_URL);

    //auth
    console.log(AUTH_EMAIL, AUTH_PASSWORD);
    await page.waitForSelector('#username', { timeout: GLOBAL_WAIT_TIME_FOR_SELECTORS });

    await page.type('#username', AUTH_EMAIL);
    await new Promise(r => setTimeout(r, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS));

    await page.type('#password', AUTH_PASSWORD);
    await new Promise(r => setTimeout(r, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS));

    await Promise.all([
      page.click(buttonClasses.login),
      page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: GLOBAL_WAIT_TIME_FOR_SELECTORS }),
    ]);

    console.log('Logged in successfully');
    
  } catch (error) {
    throw new Error('Failed to log in to LinkedIn: ' + error.message);
  }
};