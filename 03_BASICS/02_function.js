function calculatecartprice(num1) {
    return num1

}

console.log(calculatecartprice(4));

//rest operator

// we will use three dots like ... to get infinite no of inputs and return it in a function

function calculatecart(...num) {
    return num
}

console.log(calculatecart(90, 78, 678, 34, 23)); // this will return all these numbers coz of rest operator ...

// rest operator with some values before it

function calculatecartval(val1, val2, ...num) {
    return num
}

console.log(calculatecartval(90, 78, 56, 23, 90)); // in return it will give 56, 23, 90 and val1 = 90, val2 = 78 but it will not be returned coz in return we are only returning num

//how to pass and object in a function

const user = {
    name: "shubham",
    price: 899
}

function handleobject(anyobject) {

    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    

}

handleobject(user)


//you can directly pass the object in function also

handleobject({
    name: "shubh",
    price: 900
})


// how to pass an array in a function

const myNewarray = [678, 890, 456, 33, 56]

function arraypass(anyarray) {
    console.log(`the second value of an array is ${anyarray[1]}`);
    
}

arraypass(myNewarray)

// you can directly pass an array in function

arraypass([45, 670, 8, 90, "hereo"])
