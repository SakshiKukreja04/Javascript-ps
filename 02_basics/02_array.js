const marvel_heros = ["ironman","spiderman","thor"]
const dc_heros = ["batman","piyushman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
//concat creates new array


//spread operator (dropping a glass)
// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);


// flat
const another_array = [1,2,3,[4,5],6,[7,8,[9,10]]]
console.log(another_array.flat(Infinity));

// console.log(Array.isArray("sakshi"));
// console.log(Array.from("sakshi"))


let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1 ,sc2,sc3))

