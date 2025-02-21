import { AUTH_JOBTITLE, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS, GLOBAL_WAIT_TIME_FOR_SELECTORS } from '../config/env.js';

const JOB_SEARCH_BOX_CLASS = '.jobs-search-box__text-input';

export default async function handleJobSearchQuery( page ){
    await page.waitForSelector(JOB_SEARCH_BOX_CLASS, { timeout: GLOBAL_WAIT_TIME_FOR_SELECTORS });
    await page.type(JOB_SEARCH_BOX_CLASS, AUTH_JOBTITLE);

    await new Promise(r => setTimeout(r, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS));

    await page.keyboard.press('Enter');
}