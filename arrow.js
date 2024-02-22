const difference = (a, b) => a - b;
const multiply = (first, second, third) => first * second * third;

// single parameter 
const getAge = (person) => person.age;
const student = { name: 'ananta', age: 45 }
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([1, 2, 3, 4, 5]);
console.log(third);

const doubeIt = (num) => num * 2;

// no parameter
const getPi = () => Math.PI;
console.log(getPi());

// large arrow function 
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}