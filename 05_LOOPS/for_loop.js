// FOR LOOP

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(` Outer loop ${i} and Inner loop value: ${j}`);
  }
}

// WRITING TABLE USING FOR LOOP

for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication table of: ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(i + " X " + j + " = " + i * j);
  }
}

// using for loop on array

//printing all the elements of an array

let myArray = ["flash", "batman", "ironman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(`No ${index + 1} hero is ${element}`);
}

// break and continue keywords

// break: it will stop the loop when i is 5

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Value of i is ${i} so, we will stop the loop here.`);
    break;
  }
  console.log(`value of i is ${i}`);
}


// continue: it will skip the loop when i is 25

for (let i = 20; i <= 30   ; i++) {
    if (i == 25) {
        console.log(`Detected ${i} so, we will skip the loop here. and will not print 25`);
        continue;
    }
    console.log(`value of i is ${i}`);
    
}