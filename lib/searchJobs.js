import buttonClick from '../utils/handleButtonClickFunction.js';
import handleGotoUrls from '../config/handleGotoUrls.js';
import handleJobSearchQuery from '../utils/handleSearchQuery.js';

import { experienceFilters, datePostedFilters, parentFilters } from '../constants/filters.js';
import { buttonClasses } from '../constants/buttonClasses.js';
import { AUTH_JOBTITLE } from '../config/env.js';

const searchJobs = async (page) => {
  try {
    console.log(`Searching for jobs with the title: ${AUTH_JOBTITLE}...`);
    
    //Handle URL
    await handleGotoUrls(page, 'https://www.linkedin.com/jobs');

    //Query for job search
    await handleJobSearchQuery(page);

    //Date posted filter
    await buttonClick(page, parentFilters.datePosted);

    let datePostedFilter = datePostedFilters.anytime;
    await buttonClick(page, datePostedFilter);

    await buttonClick(page, buttonClasses.primary);    
    console.log('Applied "Date posted" filter');
    
    // Click on experience level filter
    await buttonClick(page, parentFilters.experience);

    const experienceFiltersList = [ experienceFilters.intern, experienceFilters.entry ];

    for (const filter of experienceFiltersList) {
      await buttonClick(page, filter);
    }    
    await buttonClick(page, buttonClasses.primary, true, 1);
    console.log('Applied Experience level filter');

    // Click on easy apply filter
    await buttonClick(page, parentFilters.easyApply);
    console.log('Applied "Easy Apply" filter');




    //click on easy apply
    await buttonClick(page, buttonClasses.primary, true, 4);
    console.log('Clicked on easy apply');




    // Select all job cards
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

    console.log("Application submitted");

  } catch (error) {
    throw new Error('Failed to search for jobs: ' + error.message);
  }
};

export default searchJobs;