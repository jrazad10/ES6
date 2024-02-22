const actor = {
    name: 'ananta',
    age: 35,
    phone: '0184374704',
    money: 1234567890

}

const { phone, age: boyos } = actor

console.log(phone);
console.log(phone);
console.log(boyos);

// array destructuring 
const numbers = [45, 55];

const [first, second] = numbers;
const [x, y] = [12, 66];

//advances

function doubleThem(a, b) {
    return [a * 2, b * 2]
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);