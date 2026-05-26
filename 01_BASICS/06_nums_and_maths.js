const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

//toString
console.log(balance.toString().length); //first changed into string then find the length

//toFixed
console.log(balance.toFixed(2)); //it fixes the balance to two decimal point

//toPrecision
const otherNumber = 23.6788
console.log(otherNumber.toPrecision(3));


//toLocalString
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // by default this put commas according to american system
console.log(hundreds.toLocaleString('en-IN')); //this put commas according to indian system

//********************************** MATHS ***************************************** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.6)); //round off to nearest integer
console.log(Math.ceil(4.1)); //always give next highest integer
console.log(Math.floor(5.6)); //always give near lowest integer
console.log(Math.sqrt(49));


console.log(Math.random()); //this give random numbers between 0 and 1
console.log((Math.random()*10) + 1); //this give random numbers between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));






