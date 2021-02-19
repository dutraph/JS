// let x = 0
// let y = 10
// while (x <= y) {
//     console.log(`alo ${x}`)
//     x++;
// }

let dice = Math.trunc(Math.random() * 20) + 1;

while (dice !== 20) {
    console.log(dice)
    dice = Math.trunc(Math.random() * 20) + 1;
}