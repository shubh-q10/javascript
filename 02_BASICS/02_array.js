const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]


//PUSH

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


//CONCAT

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);


//SPREAD METHOD

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);


//FLAT

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // it spread out all the levels of arrays and give a new array with all the elements
console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh")); // it converts the value into an array like here it will give ["h", "i", "t", "e", "s", "h"]
console.log(Array.from({name: "hitesh"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // it takes value of diff variables and put all the values into an array









