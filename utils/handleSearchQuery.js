// import { GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS, GLOBAL_WAIT_TIME_FOR_SELECTORS } from '../config/env.js';

import { 
    GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS, 
    GLOBAL_WAIT_TIME_FOR_SELECTORS 
} from '../constants/exports.js';

const JOB_SEARCH_BOX_CLASS = '.jobs-search-box__text-input';

export default async function handleJobSearchQuery( page, jobTitle ){
    await page.waitForSelector(JOB_SEARCH_BOX_CLASS, { timeout: GLOBAL_WAIT_TIME_FOR_SELECTORS });
    await page.type(JOB_SEARCH_BOX_CLASS, jobTitle);

    await new Promise(r => setTimeout(r, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS));

    await page.keyboard.press('Enter');
}