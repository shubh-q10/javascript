//we have two methods to write the object which is singleton and non-singleton(literal)

// const twitterUser = new Object() // THIS IS SINGLETON OBJECT
const tinderUser = {}  // THIS IS LITERAL OBJECT

tinderUser.id = "345txc"
tinderUser.name = "shubh"
tinderUser.isLoggedIN = false


console.log(tinderUser);

const regularUser = {
    email: "shubh@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shubh",
            lastname: "singh"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "r", 4: "d"}
const objx = {56: "x", 78: "y"}

const obj3 = {obj1, obj2}
console.log(obj3);


//we use assign method to combine objects in one object
const obj4 = Object.assign(obj1, obj2) // copy obj1 and obj2 in obj4
console.log(obj4);


//we can use spread method to combine multiple objects in one object

const combobj = {...obj1, ...obj2, ...objx} //this is very easy way to spread and combine objects in one object
console.log(combobj);


//arrays of object

const users = [
    {
        id: "abc345",
        email: "axy@gmial.com"
    },
    {
        id: "abc345",
        email: "axy@gmial.com"
    },
    {
        id: "abc345",
        email: "axy@gmial.com"
    },
    {
        id: "abc345",
        email: "axy@gmial.com"
    }
]

const user1email = users[1].email
console.log(user1email);


//getting all the keys of an object

console.log(Object.keys(tinderUser)); //this will give all the keys of object (tinderuser) in an array


//getting all the values of an object

console.log(Object.values(tinderUser)); //this will give all the values of object (tinderuser) in an array


//getting all the entries of an object

console.log(Object.entries(tinderUser)); // this will give all the entries, means key and value pair array in an array

//hasOwnProperty: this will check the if property is in the object or not

console.log(tinderUser.hasOwnProperty("isLoggedIN")); // this is true
console.log(tinderUser.hasOwnProperty("email")); //this is false








