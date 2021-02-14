'use strict'; //helps us with warnings to prevent bugs

let hasDriversLicense = false;
const passTest = true;

if (passTest){
    hasDriversLicense = true;
}

if (hasDriversLicense) console.log(`I can drive`);

const interface = 'Audio'; // reserved name interface