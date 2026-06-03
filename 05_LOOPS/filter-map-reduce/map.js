const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// adding 10 to every number in myNumbers array

const addednums = myNumbers.map((num) => num + 10)

console.log(addednums);

// chaining

const newnums = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)

console.log(newnums);
