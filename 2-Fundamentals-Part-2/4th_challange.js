'use strict';

const calcAvg = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

const avgDolphins = calcAvg(44,23,71, 'Dolphins');
const avgKoalas = calcAvg(65,54,49, 'Koalas');

function checkWinner(avg1, avg2){
    if(avg1 >= 2 * avg2){
        return ` Dolphins Win 🏆  (${avg1} vs. ${avg2}) points`; 
    }else if (avg2 >= 2 * avg1){
        return `Koalas Win 🏆  (${avg2} vs. ${avg1}) points`; 
    }else{
        return 'No team wins...'
    }
}

console.log(checkWinner(avgDolphins, avgKoalas));