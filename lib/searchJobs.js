import buttonClick from '../utils/handleButtonClickFunction.js';
import handleGotoUrls from '../config/handleGotoUrls.js';
import handleJobSearchQuery from '../utils/handleSearchQuery.js';

import { experienceFilters } from '../constants/filters.js';
import { AUTH_JOBTITLE } from '../config/env.js';

const searchJobs = async (page) => {
  try {
    console.log(`Searching for jobs with the title: ${AUTH_JOBTITLE}...`);
    
    //Handle URL
    await handleGotoUrls(page, 'https://www.linkedin.com/jobs');

    //Query for job search
    await handleJobSearchQuery(page);

    //Search filter
    await buttonClick(page, '#searchFilter_timePostedRange');

    //Click on Date posted filter button
    await buttonClick(page, '#timePostedRange-r604800');

    //Apply date posted filter
    await buttonClick(page, '.artdeco-button--primary');    
    console.log('Applied "Date posted" filter');
    
    // Click on experience level filter
    await buttonClick(page, '#searchFilter_experience');

    //Apply intern filter
    const experienceFiltersList = [ experienceFilters[intern], experienceFilters[entry]];
    
    for (const item of experienceFiltersList) {
      await buttonClick(page, item);
    }
    console.log('Applied "Experience level" filter');
    
    // Click on apply experience level filter
    await buttonClick(page, '.artdeco-button--primary', true, 1);
    console.log('Applied "Experience level" filter');

    // Click on easy apply filter
    await buttonClick(page, '#searchFilter_applyWithLinkedin');
    console.log('Applied "Easy Apply" filter');

    //click on easy apply
    await buttonClick(page, '.artdeco-button--primary', true, 4);

    // Select all job cards
    const jobListings = await page.$$(".job-card-container"); 
    console.log(`Found ${jobListings.length} jobs`);

    //Click on next
    await buttonClick(page, '.artdeco-button--primary');

    //Click on next
    await buttonClick(page, '.artdeco-button--primary');

    //Click on next
    await buttonClick(page, '.artdeco-button--primary');

    //Click on submit
    await buttonClick(page, '.artdeco-button--primary');

    console.log("Application submitted");

  } catch (error) {
    throw new Error('Failed to search for jobs: ' + error.message);
  }
};

export default searchJobs;