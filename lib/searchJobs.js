import gotoUrls from '../config/gotoUrls.js';
import handleJobSearchQuery from '../utils/handleSearchQuery.js';
import getTotalCountFromText from '../utils/getTotalCountFromText.js';
import beforeClickOnEasyApply from './beforeClickOnEasyApply.js';
import afterClickOnEasyApply from './afterClickOnEasyApply.js';
import buttonClick from '../utils/handleButtonClickFunction.js';
import { AUTH_JOBTITLE } from '../config/env.js';
import { JOBS_URL } from '../constants/urls.js';
import { buttonClasses } from '../constants/buttons.js';


const searchJobs = async (page) => {
  try {
    console.log(`Searching for jobs with the title: ${AUTH_JOBTITLE}...`);
    
    //Handle URL
    await gotoUrls(page, JOBS_URL);

    //Query for job search
    await handleJobSearchQuery(page, AUTH_JOBTITLE);

    //Get total number of jobs
    let totalJobs = await getTotalCountFromText(page, '.jobs-search-results-list__subtitle');
    console.log(`Total jobs found: ${total}`);

    //Filters or before clicking on easy apply
    await beforeClickOnEasyApply(page);

    //click on easy apply
    await buttonClick(page, buttonClasses.primary, true, 4);
    console.log('Clicked on easy apply');

    //Form after clicking on easy apply
    await afterClickOnEasyApply(page);

    console.log("Application submitted");

  } catch (error) {
    throw new Error('Failed to search for jobs: ' + error.message);
  }
};

export default searchJobs;