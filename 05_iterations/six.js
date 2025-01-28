const coding = ["ruby","cpp","java","js"]

const values = coding.forEach((item)=>{
    // console.log(item)
    return item
})
// console.log(values)
//ruby
// cpp
// java
// js
// undefined//
//foreach loop doesnt return a value

const nums = [1,2,3,4,5]

// const newNums =  nums.filter((num)=>num>2)
// console.log(newNums)

const newNums =  nums.filter((num)=>{
    return num>2 //when you open a scope return keyword is mandatory
})
console.log(newNums)