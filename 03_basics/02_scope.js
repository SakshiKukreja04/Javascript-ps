let a = 200

if(true){
    let a = 20
    const b = 30
    var c = 40
    console.log("Inner:",a);
    
}
//console.log(a); //undefined outside scope
// console.log(b);undefined outside scope
//console.log(c); //40 


//globally we can declare so it can be used
//but if you declare inside a scope({}) it cannot be used outside the scope

//var is a special case 
//blocksope and globalscope

//IMP- when you apply scope through node and on console they work differently


//nested functions 

function One(){
    const username = "sakshi"
    
    function Two(){
        const website = "yt"
        console.log(username)
    }
    console.log(website)

    Two()
}

//remeber-- small children can ask older for icecream but older ones cannot
//therefore username is accessible to print
//but One func is printing website and is asking for something not in his scope 

//conclusion- child function can access parebt function
//parent function cannot access child func


function Parent(){
    const username = "sakshi"
    if(username=="sakshi"){
        const website = " yt"
        console.log(username + website)
    }
    console.log(website); //error
    
}
console.log(username)