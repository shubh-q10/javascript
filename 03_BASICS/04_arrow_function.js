const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username},  welcome to website and your discounted price is ${this.price}`);
        console.log(this);
        

    }
}

// user.welcomeMessage()
// user.username = 'shubh'
// user.welcomeMessage()

console.log(this); 


// "this" doesnot work inside a function

function chai() {
    const name = "shubham singh"
    console.log(this.name); // here this will print undefined coz we cannot use this in function as we use in objects
    
}

chai() 


// here it is undefined too

const chai2 = function () {
    const username = "ankit"
    console.log(this.username);
    
}

chai2()

// NOW HOW TO WRITE ARROW FUNCTION

// just remove the function keyword and use arrow (=>) after parenthesis

const arrowfunction = () => {
    let moviename = "dhurandhar"
    console.log(this.moviename);
    
}

arrowfunction()


// some examples of arrow function

const mulitplytwonum = (num1, num2) => {
    return num1 * num2

}

console.log(mulitplytwonum(45, 69));


// other ways to write arrow function( implicit return) where you don not use {} and return keyword

const addTwo = (num01, num02) => num01 + num02 
const addTwo1 = (num1, num2) => (num1 + num2)

// you can also return object in arrow function using parenthesis

const addTwo2 = (num, num1) => ({username: "shubham"}) // if you don't put object inside the parenthesis then it will return undefined


console.log(addTwo(89, 90));
console.log(addTwo1(56, 43));
console.log(addTwo2(8, 8));



//using arrow function on array

const myarray = [2, 5, 6, 78]

myarray.forEach(num => console.log(num*6));








