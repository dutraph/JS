const marketList = ['apple', 'peach', 'orange', 'cheese'];

console.log(marketList[marketList.length - 1])
console.log(marketList.length)

marketList[2] = 'melon'; //replace values
console.log(marketList)
// or 

const groceriesList = new Array('apple', 'peach', 'orange', 'cheese');

console.log(groceriesList.length)

// Adding elements
groceriesList.push('lemon'); // to the end
console.log(groceriesList)

groceriesList.unshift('rice'); // to the begining
console.log(groceriesList)

// Removing elements
groceriesList.pop(); // Last element
console.log(groceriesList)

groceriesList.shift(); // First element
console.log(groceriesList)

// Show the index number of an element
groceriesList.indexOf('peach');

const search = 'egg'
if (groceriesList.includes(search)){ //check if the element is inside of the array
    console.log(`found it, it's in position: ${groceriesList.indexOf(search)}`)
}else{
    console.log('not found')
}
//or
groceriesList.unshift('bacon');
groceriesList.push(search);
groceriesList.push('avocado');

console.log(groceriesList.length);
if (groceriesList.indexOf(search) === -1){ 
    console.log('not found...');
}else{
    console.log(`found it, it's in position: ${groceriesList.indexOf(search)}`);
    if(groceriesList.length - groceriesList.indexOf(search) === 1 ){
        console.log(`this is the last element, before it we have ${groceriesList[groceriesList.length -2]}`);
    }else{
        console.log(`this is the ${groceriesList.indexOf(search)} element, it's between ${groceriesList[groceriesList.indexOf(search) -1]} and ${groceriesList[groceriesList.indexOf(search) + 1 ]}.`)
    }
    
}
console.log(groceriesList)