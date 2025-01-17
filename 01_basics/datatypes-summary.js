// JavaScript is dynamically typed: 
// Explanation
// In a dynamically typed language, the interpreter assigns a type to a variable based on the value of the variable at runtime. This means that you can assign any type of value to a variable without explicitly declaring the type.
let number = 100
console.log(typeof number);


// Primitive 7 types
// Number, String, Boolean,null,undefined,symbol,BigInt

// Non-Primitive
// Array,Objects,Functions

const hero = ["ironman","spiderman","doga"];
let myObject = {
    name: "sakshi",
    score:20
}
const myFunction = function(){
    console.log("sakshi");
    
}  
myFunction();


// for read ecma scripts

// for knowing types we use typeof to know


// *************Stack and Heap************

// Stack(primitive) - copy mai changes hote hai
// Heap (Non-primitive) - refernce of og, values changes in og

let youtubeName = "user"
anotherytName = youtubeName
anotherytName ="user_name"
console.log(youtubeName);
console.log(anotherytName);

let userOne = {
    name: "sakshi",
    upi: "s@ybl"
}
let userTwo = userOne
userTwo.upi = "p@ybl"
console.log(userOne)
console.log(userTwo)

