import {
  gotoUrls,
  handleJobSearchQuery,
  getTextFromSelector,
  beforeClickOnEasyApply,
  afterClickOnEasyApply,
  buttonClick,
  AUTH_JOBTITLE,
  JOBS_URL,
  buttonClasses,
  bypass
} from '../constants/exports.js';

const searchJobs = async (page) => {
  try {
    console.log(`Searching for jobs with the title: ${AUTH_JOBTITLE}...`);
    
    //Handle URL
    await gotoUrls(page, JOBS_URL);

    //Bypass
    let isBypassRequired = false;
    try{
      let bypassTitle = await getTextFromSelector(page, '#main-content section div h1', 3000);
      if(bypassTitle?.trim() === 'Millions of jobs and people hiring'){
        isBypassRequired = true;
      }
    } catch(error){
      console.log('Failed to check if bypass is required: Maybe class not found' + error.message);
    }

    console.log('Bypass required: ' + isBypassRequired);
    if(isBypassRequired){
      //Bypass
      await bypass(page);
    }

    //Query for job search
    await handleJobSearchQuery(page, AUTH_JOBTITLE, '.jobs-search-box__text-input');

    //Get total number of jobs
    let totalJobs = await getTextFromSelector(page, '.jobs-search-results-list__subtitle span');
    totalJobs = parseInt(totalJobs.split(' ')[0].replace(/,/g, ''), 10);
    console.log(`Total jobs found: ${totalJobs}`);

    //Filters or before clicking on easy apply
    await beforeClickOnEasyApply(page);

    //click on easy apply
    // Loop starts here
    // for(let i = 0; i < totalJobs; i++){
      //check if already applied
      let alreadyAppliedStatus = false;
      try{
        let alreadyApplied = await getTextFromSelector(page, '.artdeco-inline-feedback__message', 3000);
        alreadyAppliedStatus = alreadyApplied?.trim().split(' ')[0] === 'Applied';

      } catch(error){
        console.log('Failed to check if already applied, Maybe class not found. ' + error.message);
      }
      
      if(alreadyAppliedStatus){
        console.log('Already applied to this job, removing it');
        try{
          buttonClick(page, '.job-card-list__actions-container button span svg use');
          console.log("Removed");

        }catch(error){
          console.log('Failed to remove from the list of already applied: ' + error.message);
        }
        // continue;
        return
      }

      await buttonClick(page, buttonClasses.primary, { isIndexed: true, index: 4});
      console.log('Clicked on easy apply');

      //Form after clicking on easy apply
      await afterClickOnEasyApply(page);

      console.log("Out of questions block");
      
      //Click on submit
      await buttonClick(page, buttonClasses.primary);
      console.log("Application submitted");

      //Click on done
      console.log("Clicking on done");
      try{
        await buttonClick(page, buttonClasses.primary);
        console.log("Clicked on done");
      }catch(error){
        console.log('Failed to click on done button: ' + error.message);
      }

      //removing from the list
      console.log('Applied to this job, removing it');
      try{
        buttonClick(page, '.job-card-list__actions-container button span svg use');
        console.log("Removed");
      }catch(error){
        console.log('Failed to remove from the list after apply: ' + error.message);
      }
    // }

      await new Promise(r => setTimeout(r, 120000));
    

  } catch (error) {
    throw new Error('Failed to search for jobs: ' + error.message);
  }
};

export default searchJobs;