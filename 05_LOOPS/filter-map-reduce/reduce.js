const myNumbers = [1, 2, 3]

const myTotal = myNumbers.reduce((acc, currentvalue) => {
    console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    
    return acc + currentvalue
}, acc = 0 )

console.log(myTotal);


