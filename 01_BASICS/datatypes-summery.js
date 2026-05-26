//PRIMITIVE DATATYPES
// 7 TYPES: string, number, boolean, null(it means empty not zero), undefined( no value putted in variable)
// symbol, BIgInt(too big number, syntefic numbers)


// STRING
const name = "shuham"
const fname = "Shubh"

//NUMBER
const value = 100
const scoreValue = 100.3

//BOOLEAN
const isLoggedIn = false

//NULL
const outsideTemp = null // its empty not zero

//UNDEFINED
let userEmail; // its undefined

//SYMBOL
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid); // both are not same coz even if input is same symbol store it differently

//BigInt
const bigNumber = 85747860974989685869n



// REFERENCE (Non primitive) DATATYPES
// Array, Objects, functions

//ARRAYS
const heros = ["shaktiman", "naagraj", "doga"]

//OBJECTS
let byObj = {
    name: "hitesh",
    age: 22,
}

//FUNCTION
function sum(a, b) {
    return a*b
}

console.log(sum(3, 5));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



