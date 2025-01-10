const userEmail = ""

if(userEmail){
    console.log("got email yaya");
    
}
else{
    console.log("ohh no")
}

//falsy values
// 0,-0,false,null,undefined,"",NaN,BigInt On.

//truthy values
// "0",truth,'false',{},[],function(){}.

if(userEmail.length== 0){
    console.log("empty oops!");
}


const myObj = {}

if(Object.keys(myObj).length == 0){
    console.log("again empty object");
    
}

//Nullish Coaeshcing Operator ??

let val1;
// val1 = 10??20 //10
// val1 = null??20 //20
// val1 = undefined??20 //20
// val1 = null??10??20  //10

console.log(val1);


//Ternary Operator

//condition ? true :false

let greenTeaPrice = 100
greenTeaPrice<200? console.log("yeahh") : console.log("ohh no");


