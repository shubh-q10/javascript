//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 24)
let myCreatedDate1 = new Date("01-12-2024")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

console.log(`Right now the year is ${newDate.getFullYear()}, month is ${newDate.getMonth()} and Day is ${newDate.getDay()}`);

newDate.toLocaleString('default', {
    weekday: "long",
})






