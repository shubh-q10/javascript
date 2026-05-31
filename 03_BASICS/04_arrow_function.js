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
