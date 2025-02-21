const getTotalCountFromText = async( page, elementName ) => {
    let totalJobsClass = elementName;
    let total = await page.$eval(totalJobsClass, el => el.innerText);
    total = total.split(' ')[0].replace(',', '');
    total = parseInt(total);
    return total;
}

export default getTotalCountFromText;