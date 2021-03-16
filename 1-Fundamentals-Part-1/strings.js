let firstName = 'Paulo';
let job = 'Programmer';
let birthYear = 1990;
let thisYear = 2021;

let paulo =
  "I'm " +
  firstName +
  ', a ' +
  (thisYear - birthYear) +
  ' years old ' +
  job +
  '!';
console.log(paulo);

// better solution

paulo = `I'm ${firstName}, a ${thisYear - birthYear} years old ${job}!`;
console.log(paulo);

console.log('String with \n\
            multiple \n\
lines');

// Template literals
console.log(`String with
            multiple
lines`);
