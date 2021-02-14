'use strict';

hw("joao")
// function declaration
// For this kind of function we can call it even before the declaration
function hw(name){
    console.log(`Hello ${name}`)
}

hw('PAULO');
hw('MARIA');
hw('GABRIEL');
hw('CHELIOSSS');

function fruitProcessor(apples, oranges){
    console.log(`apples: ${apples}, oranges: ${oranges}`);
    const juice = `Juice with ${apples} apples, and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5,3))

function calcAge(thisYear, birthYear){
    return thisYear - birthYear;
}

console.log(calcAge(2021, 1990));

// function expression ( anonimous function)
// For this kind of function we can only call it after the declaration
const calcAge2 = function(birthYear){
    return 2021 - birthYear; 
}
console.log(calcAge2(1990));

// Arrow functions (shorter form of function expression)
const calcAge3 = birthYear => 2021 - birthYear;

console.log(calcAge2(1990))

const yearsUntilRetirement = (firstName,birthYear) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return ` Hi ${firstName}, you'll be able to retire in ${retirement} years from now.`
}

console.log(yearsUntilRetirement("Paulo",1990))