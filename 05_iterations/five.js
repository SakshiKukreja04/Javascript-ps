const lang = ["ruby","cpp","java","js"]

// lang.forEach(function (val){
//     console.log(val)
// })

// lang.forEach((val)=>{
//     console.log(val)
// })

// function printme(item){
//     console.log(item)
// }

// lang.forEach(printme)

lang.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})


const myArr = [
    {
        language:'javascript',
        language_short : 'js'
    },
    {
        language:'javascript',
        language_short : 'js'
    },
    {
        language:'javascript',
        language_short : 'js'
    }
]

myArr.forEach((item)=>{
    console.log(item.language)
})