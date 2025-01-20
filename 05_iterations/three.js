// loops

// [{},{},{}]

const arr = [1,2,3,4,5]

for (const item of arr) {
    // console.log(item);
    
}
const contacts = new Map();

//can be used for strings too

//Maps
// maps are used to hold a key-value pair
//refer mdn
const map = new Map()

map.set('a',1)
map.set('b',2)
// console.log(map.get('a'));
// console.log(map.size)

for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}
// Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).

contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
// console.log(contacts.size); // 1