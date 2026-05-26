// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myArr1 = ["ankit", "shuhbh", "ravi"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[3]);

// Arrays methods

myArr.push(6) // this pushes 6 in myArr array
myArr.push(7)
myArr.push(67)
myArr.pop()// this removes the last value of any array
console.log(myArr);

myArr.unshift(9) // this add the element in front of array, this method has a drawback coz it also shift the index of all the elements in the array
myArr.unshift(90)
myArr.shift() // this remove the element from front of array
console.log(myArr.includes(90)); // check if 90 is in the array or not

console.log(myArr);


// join

const newArr = myArr.join() //join method bind the elements of array in a string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice , splice

console.log("A ", myArr);


//slice: this method gives the elements from the index to last index -1 
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

//splice: this method manipulate the original array, means it completely removes those elements from array
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);







