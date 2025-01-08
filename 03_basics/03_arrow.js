const userdetails = {
    username:"sakshi",
    price:99,

    welcomeMessage : function(){
        console.log(`${this.username},you are welcomed`)
        console.log(this)
    }
}
// console.log(userdetails.welcomeMessage());
// userdetails.username="sam"
// console.log(userdetails.welcomeMessage())

// console.log(this)  //{} global execution 
//global execution on console is window


// function coffee(){
//     const username ="salshi"
//     console.log(this.username) //undefined
    
// }
// coffee()
// hence we cannot use "this" keywrd inside a function
// const coffee =function(){
//     const username ="salshi"
//     console.log(this.username) //undefined
    
// }
// coffee() //undefined

const coffee =() => {
    const username ="salshi"
    // console.log(this.username) //undefined
    console.log(this) //{}
}
// coffee()

//arrow function
//explicit return - when you use the return keyword
//implicit return - when you dont use the return keyword






// const addTwo = (num1,num2) => {
//     return num1+num2
// } 
// console.log(addTwo(2,3));

// const addThree = (n1,n2,n3) => n1+n2+n3
const addThree = (n1,n2,n3) => (n1+n2+n3)
console.log(addThree(2,3,4));


const addTwo = (num1,num2) => ({username:"sakshi"}) 
console.log(addTwo(2,3));



