const user = {
    username: 'shubh',
    email: "shubh@gmail.com"

}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: teachingSupport  // here TAsupport cam access the properties of teachingSupport also
}

teacher.__proto__ = user  // here teacher can access the properties of user also

// MODERN SYNTAX

Object.setPrototypeOf(teachingSupport, teacher) // here teachingSupport can access the properties of teacher

