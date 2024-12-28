let name = "sakshi"
let count = 40

console.log(name + count + "hello")

console.log(`hello my name is ${name} and my count is ${count}`);

//other way of declaring a string
const gameName = new String('sakshikc')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('i'))

const myName = gameName.substring(0,3);
const anotherName = gameName.slice(-8,6)
console.log(myName);
console.log(anotherName)

let stringname = "   hello   "
console.log(stringname.trim());
let url = "https://sakshi.com%20hello"
console.log(url.replace('%20','-'));
let anotherstring = "sakshi has a new car"
console.log(anotherstring.split(" "))

// read the mdn reference and also refr console for more methods
let text = "sakshi"
console.log(text.repeat(2));
