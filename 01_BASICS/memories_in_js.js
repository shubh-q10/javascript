//MEMORIES IN JAVASCRIPT

//Stack Memory(IT is used in Primitive data type)
//Heap Memory(IT is used in Non - Primitive data type)

//Stack

let myYoutubename = "shubh_life"

let anothername = myYoutubename
anothername = "ankit_life"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shubh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
