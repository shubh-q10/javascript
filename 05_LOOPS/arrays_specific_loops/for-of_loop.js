// for of loop

// for-of loop on array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(`Value of num after adding 3 is ${num + 3}`);
}

// for-of loop on a string
const greetings = "Hello World";

for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(`each car is ${greet}`);
}


