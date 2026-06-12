// let myname = "shubham     "
// let mychannel = "shubhlife     "

// console.log(myname.truelength);

let myheroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.shubh = function () {
  console.log(`shubh is present in all objects`);
};

Array.prototype.heyshubh = function () {
    console.log(`shubh says hello`);
    
}

// heroPower.shubh();
myheroes.heyshubh()
// heroPower.heyshubh()



