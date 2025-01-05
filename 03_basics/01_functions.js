// function additionNum(number1,number2){
//     console.log(number1 + number2)
// }
additionNum //here we only created a refernce
// additionNum(3,4)
function additionNum(number1,number2){
    // const result = number1+number2
    // return result
    return number1+number2
}
const output = additionNum(4,5)
// console.log(output);

function userLoggedInMessage(username){
    // if(username==undefined)
    if(!username){
        console.log("Enter UserName");
        return //further code wont be executed
    }
    return `${username}, just logged in`
}
// console.log(userLoggedInMessage("sakshi"))
userLoggedInMessage()

//REST OPERATOR

function cartItemAdd(...num){
    return num
}
// console.log(cartItemAdd(100,220,430,349))

// functions and objects

const user = {
    username: "sakshi",
    price : 199
}
function UserPrice(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`) 
}
UserPrice(user)

const myArray = [100,200,300]

function getSecondValue(getArray){
    return getArray[1]
}
// console.log(getSecondValue(myArray))
console.log(getSecondValue([100,400,900]))