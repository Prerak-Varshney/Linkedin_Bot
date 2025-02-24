import { 
    GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS, 
    GLOBAL_WAIT_TIME_FOR_SELECTORS 
} from '../constants/exports.js';

const handleJobSearchQuery = async( page, title, selector, options = {} ) => {
    const {
        timeOutForSelector = GLOBAL_WAIT_TIME_FOR_SELECTORS, 
        timeOutAfterCompletion = GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS 
    } = options;
    
    await page.waitForSelector(selector, { timeout: timeOutForSelector });
    await page.type(selector, title);

    await new Promise(r => setTimeout(r, timeOutAfterCompletion));

    await page.keyboard.press('Enter');
}

export default handleJobSearchQuery;