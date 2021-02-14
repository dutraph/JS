let bill = 275;
const tip = (bill >= 50 && bill <= 300) ? (0.15 * bill) : (0.20 * bill);
console.log(`The bill was $${bill}, and the tip was $${tip}, and the total to value is $${bill + tip}`) 