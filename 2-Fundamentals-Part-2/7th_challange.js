'use strict';


const calcTip = bill => bill <=300  && bill >=50 ? bill * 0.15 : bill * 0.2;
const calcAverage = arr => {
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        avg += arr[i];
    }
    return avg / arr.length;
}
const bills = [22, 295, 176, 440,37, 105, 10, 1100, 86, 52]
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);

}

console.log(bills)
console.log(tips)
console.log(total)
console.log(calcAverage(total))
