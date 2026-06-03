const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item) => {
    console.log(`This is the ${item}`);
    

} )

// we can put another function in foreach also

function printme(anything) {
    console.log(`Printed ${anything}`);
    

}

// now we can put printme function in foreach

coding.forEach(printme); // here you just have to give reference of the peintme function , you don't have to execute



coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})


// objects inside the array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
        },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    

})

