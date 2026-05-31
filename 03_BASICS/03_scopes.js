

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
    // console.log(website);
    two()
    
    
}

one() // error is 'website not defined" coz website in function two and we cant access it out of that function


if (true) {

    const username = "hitesh"

    if (username === "hitesh") {
        const website = "youtube"
        
    }
    // console.log(website);
    
    
}

// console.log(username);


//++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++

// two ways to write a function


addone(5) // here we are calling function before declaring and this will work fine

function addone(num) {
    return num + 1

}



addTwo(8) // here also we are calling function before declaring but it will give an error and this is the difference between the two writing methods of function

const addTwo = function(num) {
    return num + 2

}



