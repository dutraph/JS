// Type Conversion
const inputYear = '1991';
const numberInputYear = Number(inputYear)
console.log(numberInputYear + 18)

// Type Coercion (only the + operator concatenate strings and numbers, the others will convert )
console.log('I am ' + 23 + ' years old'); //23 is a integer but will be turned into a string
console.log('23' - '10' - 3); // result will be 10, because minus operator will triggers the opposite conversion
console.log('23' + '10' + 3); // result will be 23103, because plus operator will concatenate the strings with the number
console.log('23' * '10'); // 230
console.log('23' / '10'); // 2.3

// BIZARRICES DO JS
let n = '1' + 1; // 11
n -= 1; // n = 11 - 1
console.log(n); // 10 

let a = 2+3+4+'5' // (2+3+4) = 9 + '5' = '95'
console.log(a); // '95' as string

let b = '10' - '4' - '3' -2 + '5'; // '10' - '4'= '6'; '6' - '3' = '3'; '3' - 2 = '1'; '1' + '5' = '15'
console.log(b); // '15'