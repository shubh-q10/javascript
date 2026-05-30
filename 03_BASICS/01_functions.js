//function: A function in JavaScript is a reusable block of code that performs a specific task.

function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("U");
  console.log("B");
  console.log("H");
}

sayMyName();

function addTwoNumber(num1, num2) {
  let result = num1 + num2;
  return result;
}

console.log(addTwoNumber(89, 90));

//here default value is "sam" in case user don't give input value

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("ankit"));
console.log(loginUserMessage()); // here we have not given any input but default is "sam"
