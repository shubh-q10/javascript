const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Values"); //this is very old way to concatinate strings


//we will use backticks `` which is modern way to write code
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hites-hhc')


// SOME STRING METHODS
console.log(gameName[0]);
console.log(gameName.__proto__);

//length method: it gives the length of string
console.log(gameName.length);

//touppercase
console.log(gameName.toUpperCase());

//charAt: give the char at the given index in string
console.log(gameName.charAt(2));

//indexOf: give the index of text in string
console.log(gameName.indexOf('t'));

//substring: make the substring from a string start and end index where end is not included
const newString = gameName.substring(0, 4)
console.log(newString);

//slice: same as substring but you can use negative num also
const anotherstring = gameName.slice(-8, 4)
console.log(anotherstring);


//trim: it trims the whitespaces from both side
const newStringOne = "        hitesh        "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace: it raplaces the text with anther text in string
const url = "https://hitesh.com/hitesh%20singh"
const newurl = url.replace('%20', "-") // this will replace %20 with - in url
console.log(newurl);


//includes: it checks if text is in the string or not
console.log(url.includes('singh')); // this will check if singh is in url or not which is true
console.log(url.includes('hello')); // this is false coz 'hello' is not in url


//split: this will split the string on the basis of separator in this case it is '-'
const gameName1 = new String('hitesh-hc-com')
console.log(gameName1.split('-'));









