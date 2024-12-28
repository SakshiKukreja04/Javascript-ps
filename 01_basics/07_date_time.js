let myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate); //object


let myCreatedDate = new Date(2023,0,12);
myCreatedDate = new Date(2023,0,12,5,3)
myCreatedDate = new Date("01-14-23")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

//for converting miliseconds into seconds
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
// console.log(newDate.getMonth()+1) // count as index from 0, we add 1
// console.log(newDate.getTimezoneOffset());


newDate.toLocaleString('default',{
    // use control space for knowing below
    dateStyle : "long" 
})