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

