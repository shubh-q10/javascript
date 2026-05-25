const account_Id = 233535
let account_email = "dlflfd@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let account_state;  // this is undefined coz no value is given to variable account_state
// account_Id = 8657659 this thing is not allowed
console.log(account_Id);

account_email = "skdjkf@gmail.com"
accountPassword = "3446446"
accountCity = "patna"

/*
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([account_email, accountPassword, accountCity, account_state])