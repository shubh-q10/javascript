//de-structuring of an object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "shubham"
}

const {courseinstructor: instructor} = course //here you can get the value of course.courseinstructor by just using instructor
console.log(instructor);

