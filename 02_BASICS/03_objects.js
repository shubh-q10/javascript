//singleton: when we make objects through constructor method

//object literals: when we make objects through curly braces {}
const mySym = Symbol("key1")

const jsuser = {
    name: "shubh",
    "fullname": "shubham singh",
    [mySym]: "mykey1",
    age: 22,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

jsuser.email = "shubh@chatgpt.com"
// Object.freeze(jsuser) // here i have freezed the object jsuser so that its values cannot be changed
jsuser.email = "checking@gmail.com" // here email didnot changed coz i have freezed the object

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser[mySym]);


jsuser.greeting = function () {
    console.log("Hello js user");
}


jsuser.greetingTwo = function () {
    console.log(`Hello js user, ${this.name}`);
    
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

