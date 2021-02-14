const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

const dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;


if ((koalasAvg && dolphinsAvg) < 100 ){
    console.log("No winners")
}else if(((koalasAvg && dolphinsAvg) >= 100) && (koalasAvg === dolphinsAvg)){
    console.log("Draw 🥲")
}else if (dolphinsAvg > koalasAvg){
    console.log(`Winner: Dolphings. AVG Score: ${dolphinsAvg} 🏆`)
}else{
    console.log(`Winner: Koalas. AVG Score: ${koalasAvg} 🏆`)

}