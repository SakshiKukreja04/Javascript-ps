//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
    
}
//ctrl D to select variable at same time

// for (let i = 0; i <= 3; i++) {
//     console.log(`Inner Loop : ${i}`);
    
//     for (let j = 0; j <= 3; j++) {
//         // console.log(`Inner Loop : ${j} and outer Loop: ${i}`);
//     console.log(`${i} * ${j} = ${i*j}`);
//     }   
// }


// break and continue

for (let i = 0; i < 5; i++) {
    if(i==3){
        console.log("3 detected");
        break
    }
    console.log(`the value of i is : ${i}`);
 
}
for (let i = 0; i < 5; i++) {
    if(i==3){
        console.log("3 detected");
        continue
    }
    console.log(`the value of i is : ${i}`);
 
}