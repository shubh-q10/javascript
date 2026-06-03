//Maps: it is for unique values only

const map = new Map
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India") // i have added india two times but it will print only once in map

console.log(map);

