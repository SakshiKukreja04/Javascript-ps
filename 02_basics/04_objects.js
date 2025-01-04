//Singleton Object
const tinderUser = new Object() //singleton object/constructor
const tinderUserApp = {}        // NonSingleton object

tinderUser.id = "123abc"
tinderUser.login = true
tinderUser.matches = 3
// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    userFullName : {
        userLoginName :{
            firstName : "Sakshi",
            lastName : "Kukreja"
        },
    }
}



// console.log(regularUser.userFullName.userLoginName)

const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "a" , 4 : "b"}

// console.log(Object.assign({},obj1,obj2))

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const userDe = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 2,
        email : "s@gmail.com"
    },
    {
        id : 3,
        email : "s@gmail.com"
    }
]

userDe[1].email

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("id"))

const course = {
    courseName :"js course",
    courseFee : 23,
    courseInstructor : "hitesh sir"

}

// console.log(course.courseInstructor)

const {courseInstructor:instructor} = course //destructuring

console.log(instructor);


//json api
//randomuserme
//jsonformatter

// {
//     name : "sakshi",
//     class: "d7b",
//     rollno : 29
// }
