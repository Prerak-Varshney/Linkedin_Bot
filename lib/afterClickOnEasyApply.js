import { buttonClasses, buttonClick, getTextFromSelector, setAnswersToFormQuestions } from '../constants/exports.js';
 
const afterClickOnEasyApply = async (page) => {
    const jobListings = await page.$$(".job-card-container"); 
    console.log(`Found ${jobListings.length} jobs`);

    //Click on next
    let buttonText = await getTextFromSelector(page, `${buttonClasses.primary} span`);

    while(buttonText !== 'Submit application'){
        const questionType = await getTextFromSelector(page, ".ph5 div h3");
        console.log(`Question type: ${questionType}`);
        await setAnswersToFormQuestions(page, questionType);
        await buttonClick(page, buttonClasses.primary);
        buttonText = await getTextFromSelector(page, `${buttonClasses.primary} span`);
    };
};

export default afterClickOnEasyApply;