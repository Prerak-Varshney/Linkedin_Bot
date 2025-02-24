import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

import {
  linkedinBot,
  GLOBAL_WAIT_TIME_FOR_SELECTORS
} from '../constants/exports.js';

//middlewares
puppeteer.use(StealthPlugin());

const puppeMaster = async(setOs='windows') => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 730});
  page.setDefaultNavigationTimeout(GLOBAL_WAIT_TIME_FOR_SELECTORS);

  try {
    if(setOs === 'windows'){
        await page.setUserAgent(
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
        );
    }
    // else if(setOs === 'macos'){
    //     // await page.setUserAgent(
    //     //     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    //     // );
    // }
    else{
        console.log("Not supported for other os right now");
        await browser.close();
        return;
    }

    return { browser, page };

    // await linkedinBot(page);

    }catch(error){
        console.error('Some error occured:', error);
        await browser.close();
        throw error;
    }
}

export default puppeMaster;