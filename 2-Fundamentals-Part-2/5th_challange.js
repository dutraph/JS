// const calcTip = bill =>{
//     if (bill <=300  && bill >=50){
//         const tip = bill * 0.15;
//         return tip;
//     }else{
//         const tip = bill * 0.20;
//         return tip;
//     }
// }

// or use ternary
const calcTip = bill => bill <=300  && bill >=50 ? bill * 0.15 : bill * 0.2;

const bill = [125, 555, 44];
const tips = [];
const total = [];

for (let t = 0; t < bill.length; t++) {
    tips.push(calcTip(bill[t]));
    
}
for (let i = 0; i < bill.length; i++) {
    total.push(bill[i] + tips[i]);
}

console.log(`Bills: ${bill}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${total}`);


