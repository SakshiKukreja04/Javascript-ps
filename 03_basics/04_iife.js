//Immediately Invoked Function Expression

//we use it avoid pollution in the global scope

// ()()

(function chai(){
    //names iifi
    console.log("heyyyy");
    
})();
//semicolon is must or error encounteres

(function aurcode(){
    console.log(`DB CONNNECTED`);
    
})();


((name)=>{
    //iifi with parameteres and unnamed
    console.log(`hello user,${name}`);
})('sakshi');