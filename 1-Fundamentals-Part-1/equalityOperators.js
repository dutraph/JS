const age = 18;
if (age === 18) console.log('')

18 === 18; // '==='estrict comparison (type must be the same) 
'18' == 18; // '==' loose comperison, does type coercion could be string to number

const favNumber = prompt("Type your favourite number: ");
const numConversion = Number(favNumber)

if (numConversion === 23){
    console.log(`good number is the number ${numConversion}`)
}