function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
    SetUsername.call(this, username) 

    this.email = email
    this.password = password

}


const user1 = new createUser("shubh", 'shubh@gmail.com', "123dghie")

console.log(user1);
