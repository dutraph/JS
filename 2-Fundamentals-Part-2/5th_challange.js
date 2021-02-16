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

tips.push(calcTip(bill[0]))
tips.push(calcTip(bill[1]))
tips.push(calcTip(bill[2]))

for (let i = 0; i < bill.length; i++) {
    total.push(bill[i] + tips[i]);
}

console.log(`Bills: ${bill}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${total}`);


