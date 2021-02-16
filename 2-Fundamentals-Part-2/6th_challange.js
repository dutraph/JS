'use strict';

const john = {
    fullName: "John Smith",
    mass: 108,
    height: 1.79,
    calcBMI: function(){
        this.bmi = (this.mass / (this.height ** 2)).toPrecision(4);
        return this.bmi;
    }
}

const mark = {
    fullName: "Mark Miller",
    mass: 92,
    height: 1.55,
    calcBMI: function(){
        this.bmi = (this.mass / (this.height ** 2)).toPrecision(4);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

john.bmi > mark.bmi ? console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}!'s \
(${mark.bmi}).`) : console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);