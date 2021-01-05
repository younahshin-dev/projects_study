'use strict'

function add(num1, num2) {
    return num1+num2;
}

function devide(num1, num2) {
    return num1/num2;
}

function print(a, b, c) { //파라미터명 좀더 의미있게
    console.log(`print : ${a}, ${b}, ${c}`);
}

print(33,4,'dfdf');


 const doSomething = add;

const result = doSomething(2,3);
console.log(result);
const result2 = add(2,3);
console.log(result2);

console.clear();

function surprise(operator) {
    const result = operator(2, 3); //add(2,3)
    console.log(result);
}

surprise(devide);
