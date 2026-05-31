// IIFE: Immediately Invoked Function Expressions (IIFE)

// PUT THE FUNCTION INSIDE A PARENTHESIS AND ONE PARENTHESIS JUST AFTER THAT TO IMMEDIETLY RUN THE FUNCTION RIGHT AWAY

(function one() {
  console.log(`DB CONNECTED`);
})();


// but if you write two IIFE function just after each other then you need to stop the first function using ; otherwise it will give an error


// arrow function

(() => {
    console.log(`DB CONNECTED THROUGH ARROW FUNCTION`);
    
})();

// passing variable in IIFE function

((name) => {
    console.log(`hello ${name}, welcome to IIFE function `);
    
})("Shubham Singh")
