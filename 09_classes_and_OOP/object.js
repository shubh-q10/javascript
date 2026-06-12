function multiplyBy5(num) {
    return num*5

}

multiplyBy5.power = 2

console.log(multiplyBy5(8));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


// at the end everything in javaScript is an object
// function is also an object

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
    
}

const user1 = createUser("ankit", 45)
const user2 = createUser("abhay", 450)

console.log(user1);
console.log(user2);



