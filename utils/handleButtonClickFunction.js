import { GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS, GLOBAL_WAIT_TIME_FOR_SELECTORS } from '../config/env.js';

const buttonClick = async(page, elementName) => {
  await page.waitForSelector(elementName, { timeout: GLOBAL_WAIT_TIME_FOR_SELECTORS });
  await page.click(elementName);
  await new Promise(r => setTimeout(r, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS));
};

const buttonClickWithIndex = async(page, elementName, index) => {
  const findWithElement = await page.$$(elementName);
  await findWithElement[index].click();
  await new Promise(r => setTimeout(r, GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS));
}

export { buttonClick, buttonClickWithIndex };