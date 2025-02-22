// import handleFilters from '../utils/handleFilters.js';
// import { experienceFilters, datePostedFilters, parentFilters } from '../constants/filters.js';
// import buttonClick from '../utils/handleButtonClickFunction.js';

import { 
    handleFilters, 
    buttonClick, 
    parentFilters, 
    datePostedFilters, 
    experienceFilters 
} from '../constants/exports.js';

const beforeClickOnEasyApply = async (page) => {
    //Date posted filter 
    await handleFilters(
        page, 
        parentFilters.datePosted, 
        [datePostedFilters.anytime]
    );
    console.log('Applied "Date posted" filter');

    // Click on experience level filter
    await handleFilters(
        page, 
        parentFilters.experience, 
        [ experienceFilters.intern, experienceFilters.entry ], 
        true, 
        1
    );
    console.log('Applied Experience level filter');

    // Click on easy apply filter
    await buttonClick(page, parentFilters.easyApply);
    console.log('Applied "Easy Apply" filter');
}

export default beforeClickOnEasyApply;