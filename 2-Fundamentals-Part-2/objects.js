// Why use objects? to solve the problems like the following;

// Problem
const pauloArray = [
    'Paulo',
    'Dutra',
    30,
    'DevOps Engineer',
    ['Marcio C. da Silva', 'Barbara F. Dutra']
];

// Solution
const pauloObject = {
    firstName: 'Paulo',
    lastName: 'Dutra',
    birthYear: 1990,
    job: 'DevOps Engineer',
    hasDriversLicense: true,
    parentsName: {
        fatherName: 'Marcio C. da Silva',
        motherName: 'Barbara F. Dutra'
    },
    friends: [
        'Diego',
        'Gabriel',
        'Michael'],

    //object method (a function inside of an object is called a method)
    calcAge: function(){
        this.age = 2021 - this.birthYear; // adding the age to the object we dont need to calculate it all the time
        return this.age
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
}

// const question = prompt("What do you wanna know about Paulo? firstName, lastName, age, job");
// pauloObject[question] ? console.log(pauloObject[question]) : console.log('Wrong request');

pauloObject.location = 'Brasil';
pauloObject['twitter'] = '@phdutra_'
console.log(pauloObject)

console.log(`${pauloObject.firstName} has ${pauloObject.friends.length} friends, and his best friend is called ${pauloObject['friends'][0]}`)


console.log(pauloObject.calcAge())
console.log(pauloObject)
console.log(pauloObject.age)

console.log(pauloObject.getSummary())