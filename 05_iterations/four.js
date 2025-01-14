const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple",
}

for (const key in myObject) {
    // console.log(key);
    
    // console.log(myObject[key]);

    // console.log(`${key} shorcut is for ${myObject[key]}`);
    
    
}

const programming = ["js","cpp","java"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
    
    
}

//forin loop ,if we try map it is not iterable