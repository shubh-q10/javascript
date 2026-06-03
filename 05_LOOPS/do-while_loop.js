
// do-while loop


let score = 1

do {
    console.log(`Score is ${score}`);
    score++
    
    
} while (score <= 10);

// what if score value is already greater than 10
// it will print 11 coz in do-while loop do happens first and condition happen later

let score1 = 11
do {
    console.log(`Score1 is ${score1}`);
    score1++
    
    
} while (score1 <= 10);
