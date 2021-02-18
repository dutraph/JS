'use strict';

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
    
}


const paulo = [
    'Paulo',
    'Dutra',
    30,
    'Developer',
    ['Marcio', 'Barbara', 'Maria'],
    true,
    'avocado'
];

const types = [];

for (let i = 0; i < paulo.length; i++){
    console.log(paulo[i], typeof paulo[i]);
    types.push(typeof paulo[i])
}

console.log(types)

const years = [1990, 1997, 2008, 1935, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2050 - years[i]);
    
}
console.log(ages)


// Continue and Break

//Continue
for (let i = 0; i < paulo.length; i++){
    if (typeof paulo[i] !== 'string') continue;
    console.log(paulo[i], typeof paulo[i]);
}

// Break
for (let i = 0; i < paulo.length; i++){
    if (typeof paulo[i] === 'number') break;
    console.log(paulo[i], typeof paulo[i]);
}