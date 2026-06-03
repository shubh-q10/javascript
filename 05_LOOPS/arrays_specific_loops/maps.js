//Maps: it is for unique values only

const map = new Map
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India") // i have added india two times but it will print only once in map

console.log(map);

// for-of loop on map

for (const country of map) {
    console.log(country);
    
    
}

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
    
}

// for-of loop on object

const myobj = {
    "name": "shubh",
    "class" : 7,
    "rollno": 6
}

for (const [key, value] of myobj) {
    console.log(key, value);
    
    
}