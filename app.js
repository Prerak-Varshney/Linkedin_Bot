import { puppeMaster, linkedinBot } from './constants/exports.js';

const { browser, page } = await puppeMaster('windows');

const runLinkedinBot = async () => {
  try{
    await linkedinBot(page);
  } catch(error){
    console.error('Error running Linkedin Bot:', error);
  } finally{
    await browser.close();
  }
}

runLinkedinBot();