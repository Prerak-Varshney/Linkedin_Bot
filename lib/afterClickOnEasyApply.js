// import { buttonClasses } from '../constants/buttons.js';
// import buttonClick from '../utils/handleButtonClickFunction.js';

import { buttonClasses, buttonClick} from '../constants/exports.js';
 
const afterClickOnEasyApply = async (page) => {
    const jobListings = await page.$$(".job-card-container"); 
    console.log(`Found ${jobListings.length} jobs`);

    //Click on next
    await buttonClick(page, buttonClasses.primary);

    //Click on next
    await buttonClick(page, buttonClasses.primary);

    //Click on next
    await buttonClick(page, buttonClasses.primary);

    //Click on submit
    await buttonClick(page, buttonClasses.primary);
};

export default afterClickOnEasyApply;