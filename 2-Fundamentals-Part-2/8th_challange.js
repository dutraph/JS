'use strict';
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let concat = '';
  let day = 'Day';
  for (let i = 0; i < arr.length; i++) {
    i === 0 ? day : (day = 'Days');
    concat += ` ${arr[i]}ºC in ${i + 1} ${day} ...`;
  }
  return concat;
};

console.log(printForecast(temp2));
