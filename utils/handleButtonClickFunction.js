import { 
  GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS, 
  GLOBAL_WAIT_TIME_FOR_SELECTORS, 
  timeOut
} from '../constants/exports.js';

const buttonClick = async(page, selector, options={}) => {
  const { 
    isIndexed = false, 
    index = 0, 
    timeOutForSelector = GLOBAL_WAIT_TIME_FOR_SELECTORS,
    timeOutAfterCompletion = GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS 
  } = options;

  if(!index){
    await page.waitForSelector(selector, { timeout: timeOutForSelector });
    await page.click(selector);
    await new Promise(r => setTimeout(r, timeOutAfterCompletion));
    return;
  }

  const findWithElement = await page.$$(selector);
  await findWithElement[index].click();
  await new Promise(r => setTimeout(r, timeOutAfterCompletion));
  return;
};

export default buttonClick;