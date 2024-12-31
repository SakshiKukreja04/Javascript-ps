let myArray = [1,2,3,4,5,"sakshi"]
// console.log(myArray[0]);
// console.log(myArray[5]);

const arr = new Array(1,2,3,4)

const myHero = ["shaktiman","doga"]

//methods

myArray.push(7)
// console.log(myArray);
myArray.pop()
// console.log(myArray)

myArray.unshift(9) //we can use this while making to-do lst
// console.log(myArray);
// myArray.shift()
// console.log(myArray);

let newArr = [1,2,3,4,5,6,7]
// console.log(newArr.includes(5));
// console.log(newArr.indexOf(2));

const narray = newArr.join()
// console.log(typeof narray);


// slice and splice

const myn1 = newArr.slice(1,4)
console.log("A" , newArr);
console.log(myn1);

const myn2 = newArr.splice(1,4)
console.log("B" , newArr);
console.log(myn2)

//the only difference isnt just range inclusion

// also see how the original array is affected 
// slice- og array is same
// splice - og array is affected by removing the splice content from og array

// before splice - [0,1,2,3,4,5]
//splice - (1,3)  (it works on index)
// after splice - [0,4,5]

