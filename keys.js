const glass  = {
    name: 'glass',
    color : 'golden',
    price : 12,
    isCleaned : true
}

console.log(glass);
const keys = Object.keys(glass); //all property names
const values = Object.values(glass); // all values 
const entries = Object.entries(glass); //araay of array or two dimensional array


console.log(keys);
console.log(values);
console.log(entries);

// delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

//freeze
Object.freeze(glass);
glass.source = 'bd'
glass.price = 12000;
console.log(glass);

