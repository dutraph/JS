'use strict';

// loop inside another loop
for (let ex = 1; ex <= 3 ; ex++) {
    console.log(`Exercice #${ex}`);
    if(ex === 1){
        for (let rep = 1; rep <= 10; rep++) {
            console.log(`Cross bar Repetition: ${rep}`);
            
        }
    } else if (ex === 2){
        for (let rep = 1; rep <= 5; rep++) {
            console.log(`weight lifting repetition: ${rep}`);
            
        }
    } else{
        for (let rep = 1; rep <= 18; rep++) {
            console.log(`jump repetition: ${rep}`);
            
        }        
    }
}

// Tabuada de 1 a 100

for (let i = 1; i <= 100 ; i++) {
    console.log(' ')
    console.log(`Tabuada de: ${i}`)
    for (let a = 1; a <= 10; a++) {
        console.log(`${i} x ${a} = ${i*a}`)
    }
}