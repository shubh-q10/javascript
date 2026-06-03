const myobject = {
    py: "python", 
    js: "javascript",
    rb: "ruby",
    swift: "swift by apple"
}


//for-in loop on object

for (const key in myobject) {
    console.log(`${key} is shortcut for ${myobject[key]}`);
    
    
    
}

// for-in loop on array

const myarray = ['java', 'py', 'js', 'cpp']


// THIS WILL PRINT ONLY THE KEY ON AN ARRAY

for (const key in myarray) {
    console.log(key);
    
}


// THIS WILL PRINT THE VALUE OF ARRAY AT THE SPECIFIC KEY

for (const key in myarray) {
    console.log(myarray[key]);
    
}

