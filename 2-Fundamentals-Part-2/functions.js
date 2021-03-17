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
    console.log(`apples: ${apples}, oranges: ${oranges == 0 ? `no oranges mate`: oranges}`);
    const juice = `Juice with ${apples} apples, and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5,1))

function calcAge(thisYear, birthYear){
    return thisYear - birthYear;
}

console.log(calcAge(2021, 1990));

function personelData(name, age, job){
    if (age >=18){
        return `Yo ${name}, you can join our club, you're ${age}`
    }else{ return `GTFO here dude... go back to your ${job} job`}
}

console.log(personelData("Mark", 19, "IT Tech"))

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
    return `Hi ${firstName}, ${retirement < 0 ? 'status: Retired.': 'status: ' + retirement + ' year(s) util retirement'}.`
}

console.log(yearsUntilRetirement("Paulo",1990))


const personalData = (name, age, job) => {
    if (age >=18){
        return `Yo ${name}, you can join our club, you're ${age}`
    }else{ return `Get out, dude... get back to your ${job} job`}
}

console.log(personalData("Jack", 18, "chashier"))


// Functions calling other functions

function callFunc() {
    console.log("Calling testHw function")
    testHw()
}
function testHw() {
    console.log("Hello World!")
}

callFunc()

function cutFruitPieces(fruit){
    return fruit * 4;
}

const fruitProcessor2 = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples, and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor2(3, 5))