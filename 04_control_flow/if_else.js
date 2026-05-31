// if statement: code will execute if condition is true


if (true) {

    // here condition is true so inside code will be executed

    
}

if (2 == 2) {

    // here, also condition is evaluated true so inside code will be executed

}

const isuserLoggedIN = true


if (isuserLoggedIN) {

}

if ( 2 == "2") {
    console.log("Executed");
    
}


// below if statement will not be executed coz we are using === strict comparison
if (2 === "2") {
    console.log("Executed");
    
}

if ( 2 != 3) {
    console.log("yes 2 is not equal to 3");
    
}


// if - else statement

if ( 2 == 3) {
    console.log( "2 == 3");
    
} else {
    console.log("2 != 3");
    
}



const score = 70

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
    
} else {
    const power = "not fly"
    console.log(`User power: ${power} `);
    
}


// short-hand notation

const balance = 1000

if (balance > 500) console.log("enough money for treat");
if (balance > 5000) console.log("enough money"); else console.log("insufficient balance for the trip");

// if-else-elif condition

if (balance < 500) {
    console.log("less than 500");
    
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");
    
}

// short-hand of above statement

if ( balance < 500) console.log("less than 500"); else if (balance < 750) console.log("less than 750"); else if (balance < 900) console.log(("less than 900")); else console.log("less than 7899");


// and statement ( && )

const userLoggedIn = true
const debitcard = true
const loggedINFromGoogle = false
const loggedINfromgmail = true

if (userLoggedIn && debitcard) {
    console.log("allowed to buy clothes");
    
    
}

// or statement ( || )

if (loggedINFromGoogle || loggedINfromgmail) {
    console.log("user logged in");
    
    
}

