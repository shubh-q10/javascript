const { use } = require("react");

let a = 690
const b = 890

if (true) {
  let a = 10;
  const b = 20;
  console.log("inner", a);
  
}

console.log(a);
console.log(b);


function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
        
        
    }
    console.log(website);
    two()
    
    
}

one() // error is 'website not defined" coz website in function two and we cant access it out of that function


if (true) {

    const username = "hitesh"

    if (username === "hitesh") {
        const website = "youtube"
        
    }
    console.log(website);
    
    
}

console.log(username);


//++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++

function addone(num) {
    return num + 1

}

addone(5)


