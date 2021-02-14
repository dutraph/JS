const markMass = 78;
const markHeight = 1.69;

const markImc = (markMass / (markHeight * markHeight))

const johnMass = 85;
const johnHeight = 1.76;


let johnImc = (johnMass / (johnHeight * johnHeight))

const markHigherImc = markImc > johnImc

console.log("Mark is fat? " + markHigherImc)


console.log("Mark: " + markImc)
console.log("John: " + johnImc)

