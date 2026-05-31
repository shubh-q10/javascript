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
    console.log(i + " X " + j + ' = ' + i*j);
    
  }
}

