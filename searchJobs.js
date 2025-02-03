const { wait } = require('./utils');

const searchJobs = async (page, config) => {
  try {
    console.log(`Searching for jobs with the title: ${config.jobTitle}...`);

    await page.goto('https://www.linkedin.com/jobs', {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    });

    await page.waitForSelector('.jobs-search-box__text-input', { timeout: 60000 });
    await page.type('.jobs-search-box__text-input', config.jobTitle);
    await page.keyboard.press('Enter');

    // Click "Date posted" filter
    await page.waitForSelector('#searchFilter_timePostedRange', { timeout: 60000 });
    await page.click('#searchFilter_timePostedRange');

    const timePostedSelector = "#timePostedRange-r604800";
    await page.waitForSelector(timePostedSelector, { timeout: 60000 });
    await page.click(timePostedSelector);

    const applyPostedFilter = ".artdeco-button--primary";
    await page.waitForSelector(applyPostedFilter, { timeout: 60000 });
    await page.click(applyPostedFilter);
    console.log('Applied "Date posted" filter');

    // Click "Experience level" filter
    const experienceLevelSelector = ".artdeco-pill#searchFilter_experience";
    await page.waitForSelector(experienceLevelSelector, { timeout: 60000 });
    await page.click(experienceLevelSelector);

    const experienceLevelCheckboxSelector = "input[name='experience-level-filter-value'][value='2']";
    await page.waitForSelector(experienceLevelCheckboxSelector, { timeout: 60000 });
    await page.click(experienceLevelCheckboxSelector);

    const midSeniorLabelSelector = "label[for='experience-4']";
    await page.waitForSelector(midSeniorLabelSelector, { timeout: 60000 });
    await page.click(midSeniorLabelSelector);

    //Checkpoint reached

    
    const applyExperienceFilter = ".artdeco-button--primary";
    await page.waitForSelector(applyExperienceFilter, { timeout: 60000 });
    await page.click(applyExperienceFilter);
    
    console.log("Checkpoint reached");



    // Click "Easy Apply" filter if enabled
    await page.waitForSelector('#searchFilter_applyWithLinkedin', { visible: true, timeout: 60000 });
    await page.evaluate(() => {
    document.querySelector('#searchFilter_applyWithLinkedin').click();
    });
    console.log('Clicked on "Easy Apply" filter');


    await wait(20000);
  } catch (error) {
    throw new Error('Failed to search for jobs: ' + error.message);
  }
};

module.exports = searchJobs;
