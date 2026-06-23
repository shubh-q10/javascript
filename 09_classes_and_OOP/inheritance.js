const user = {
  username: "shubh",
  email: "shubh@gmail.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: teachingSupport, // here TAsupport cam access the properties of teachingSupport also
};

teacher.__proto__ = user; // here teacher can access the properties of user also

// MODERN SYNTAX

Object.setPrototypeOf(teachingSupport, teacher); // here teachingSupport can access the properties of teacher

// here im making a method called trueLength which trim the string

let user1 = "shubh     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true lenght of text is: ${this.trim().length}`);
};


// NOW WE CAN USE THIS METHOD ON ANY STRING
// here trueLength method is removing the whitespaces and then telling the length of the string


user1.trueLength()
'hiteshchoudhary     '.trueLength()
"icetea".trueLength()


