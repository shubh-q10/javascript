const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter

const newNums = myNums.filter((num) => num > 4);

// this will print empty array coz we are using {} but we are not returning anything

const newNums0 = myNums.filter((num) => {
  num > 4;
});

const newNums1 = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums);
console.log(newNums0);
console.log(newNums1);

// we can do the same above thing using forEach

const newNum2 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNum2.push(num);
  }
});

console.log(newNum2);


