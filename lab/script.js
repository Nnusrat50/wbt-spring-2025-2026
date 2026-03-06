//1 no

let a = 5;
let b = 10;

console.log("a =", a);
console.log("b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a);
console.log("b =", b);


//2 no

function square(n) {
    return n * n;
}

for (let i = 1; i <= 10; i++) {
    console.log(`square(${i}) = ${square(i)}`);
}

//3 no

const numbers = [75, 90, 589, 111, 682, 912, 5];

let largest = numbers[0];

for (const num of numbers) {
    if (num > largest) {
        largest = num;
    }
}

console.log(`Largest number= ${largest}`);