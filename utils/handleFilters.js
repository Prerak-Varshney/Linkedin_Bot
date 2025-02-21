import buttonClick from './handleButtonClickFunction.js';
import { buttonClasses } from '../constants/buttonClasses.js';
export const handleFilters = async ( page, parentFilter, filtersList ) => {

    await buttonClick(page, parentFilter);
    for (const filter of filtersList) {
        await buttonClick(page, filter);
    }
    await buttonClick(page, buttonClasses.primary);    
}

export default handleFilters;