const user = {
    username: "shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function () {
        // console.log("Got user details from database");
        console.log(`username: ${this.username}`);

        
        
    }
}

console.log(user.username);
console.log(user["username"]);
console.log(user.getUserDetail());

