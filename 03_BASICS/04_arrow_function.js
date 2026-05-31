const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username},  welcome to website and your discounted price is ${this.price}`);
        

    }
}

user.welcomeMessage()
user.username = 'shubh'
user.welcomeMessage()