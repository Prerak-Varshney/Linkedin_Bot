import { 
  GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS, 
  GLOBAL_WAIT_TIME_FOR_SELECTORS 
} from '../constants/exports.js';

const buttonClick = async(page, elementName, isIndexed = false, index = 0) => {
  if(!index){
    await page.waitForSelector(elementName, { timeout: GLOBAL_WAIT_TIME_FOR_SELECTORS });
    await page.click(elementName);
    await new Promise(r => setTimeout(r, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS));
    return;
  }

  const findWithElement = await page.$$(elementName);
  await findWithElement[index].click();
  await new Promise(r => setTimeout(r, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS));
  return;
};

export default buttonClick;