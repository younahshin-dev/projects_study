//자바스크립트 변수 
//작은단위변수 : number,string, boolean, null, undefined
//작은단위 이외의 변수는 모두 object
'use strict'

let number = 2;
let num = '2';

//작은 단위의 변수는 선언하면 메모리가할당되고 메모리에 값이 적제된다.
let number2 = number;

console.log(number);
console.log(number2);

number2 = 3;
//값만 복사한 아이임으로 업데이트 결과가 number에 영향이 없다.
console.log(number);
console.log(number2);
//자바스크립트는 데이터 타입이 없는 미친 언어

//object (큰단위 변수)
let obj = {
    name: 'ellie',
    age: 5
};

console.log(obj);
let obj2 = obj;
console.log(obj2);

obj.name = 'james';
console.log('------------');
console.log(obj);
console.log(obj2);

let a = 2;
a = 4;
a = 0;

//상수는 변경이 안됨
const b = 1;
//b = 2; //오류 발생

const objConst = {
    name: 'ynshin',
    age:8
};

let objConst2 = objConst;
console.log('------------');
console.log(objConst);
console.log(objConst2);
console.log('------------');
objConst.name = 'elle'
console.log('------------');
console.log(objConst);
console.log(objConst2);
console.log('------------');
objConst2 = {
    name : 'test',
    age : '222'
}
console.log('------------');
console.log(objConst);
//obj는 메모리에 object가 담긴게 아니라 object가 가르키로이는 레퍼런스가 담김 const object 레퍼런스는 잠겨있지만
// objConst = {
//     name: 'changed',
//     age:54
// };
//레퍼런스 자체를 다른 레퍼런스로 바꾸는것은 불가능

//오브젝트가르키고있는 레퍼런스 대신에 가르키고 있는 메모리의 값은 변경이 가능
objConst.name = 'ellie';
console.log(objConst)
