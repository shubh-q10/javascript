// const promiseOne = new Promise()
// const date = new Date()

// here new is constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`welcome ${this.username}`);
        
    }

    return this

}

const userOne = new User("shubham", 13, true)
const userTwo = new User("ankit", 45, false)
console.log(userOne.constructor);
// console.log(userTwo);



