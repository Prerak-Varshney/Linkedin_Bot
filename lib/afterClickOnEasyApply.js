import { buttonClasses } from '../constants/buttonClasses.js';
import buttonClick from '../utils/handleButtonClickFunction.js';

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