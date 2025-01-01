//singleton


const mySym = Symbol("mykey")

const userDetail ={
    name : "sakshi",
    age : 19,
    [mySym] : "mykey2",//here we are using it as a key
    //mySym : "here we are using it as norm string"
    "fullName" : "Sakshi Kukreja",
    email : "sakshi@gmail.com",
    hobbie : "singing"
}
//way to access-
// console.log(userDetail.age)
// console.log(userDetail["fullName"])
// console.log(userDetail[mySym]);

// console.log(typeof mySym);

// userDetail.email = "sakshi@vesit.com"
// console.log(userDetail.email)
// Object.freeze(userDetail.email)
// console.log(userDetail.email)


userDetail.greeting = function(){
    console.log("Hello user")
}
console.log(userDetail.greeting())

userDetail.greeting2 = function(){
    console.log(`Hello User, ${this.name} Welcome`)
}
console.log(userDetail.greeting2())
