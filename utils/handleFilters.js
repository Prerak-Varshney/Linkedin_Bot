// import buttonClick from './handleButtonClickFunction.js';
// import { buttonClasses } from '../constants/buttons.js';

import { buttonClick, buttonClasses } from '../constants/exports.js';

const handleFilters = async ( page, parentFilter, filtersList, isButtonIndexed=false, index=0 ) => {

    await buttonClick(page, parentFilter);

    for (const filter of filtersList) {
        await buttonClick(page, filter);
    }

    if(!isButtonIndexed){
        await buttonClick(page, buttonClasses.primary);    
        return;
    }

    await buttonClick(
        page, 
        buttonClasses.primary, 
        {isIndexed: true, index: index}
    );
    
    return;
}

export default handleFilters;