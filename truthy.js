// if there is a string then it is truthy

const userEmail = "h@itesh.ai"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");
    
}

// if there is no string then it is falsy

const email = ""

if (email) {
    console.log("User have email");
    
} else {
    console.log("User don't have email");
    
}

// if there is empty array then it is truthy

const emailarray = []
if (emailarray) {
    console.log("User have array of email");
    
} else {
    console.log("User dont have array of email");
    
}


//TRUTHY AND FALSY RULES

// FALSY VALUES: false, 0, -0, BigInt, 0n, "", null, undefined, Nan
// TRUTHY VALUES: [], "0", "false", " "(space in string), function() {} , 
// anything which is not falsy is truthy


// checking if object is empty or not

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// checking if array is empty or not

const array1 = []

if (array1.length === 0) {
    console.log("array1 is empty");
    
} else {
    console.log("array1 is not empty");
    
}