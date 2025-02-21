import buttonClick from './handleButtonClickFunction.js';
import { buttonClasses } from '../constants/buttonClasses.js';
export const handleFilters = async ( page, parentFilter, filtersList, isButtonIndexed=false, index=0 ) => {

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
        true, 
        index
    );
    return;
}

export default handleFilters;