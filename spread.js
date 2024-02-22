const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 4, 5, 6, 7, 8, 89, 98, 70, 100];
const arrayMax = Math.max(...numbers);

console.log(arrayMax);


// use spread operator to copy 

const friends = [4, 5, 87, 78, 56, 99];
const bondu = friends;
const dosto = [...friends]
console.log(dosto);
friends.push(120);
console.log(dosto);
console.log(friends);

// advanced
const shonka = [...friends, 9999]; //add extra element 
console.log(shonka);
