
'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); //코딩하는 순간 특정 키캆을 알고 받아오고싶을때
console.log(ellie['name']); //정확히 어떤 키값을 사용할지 모를때 런타임에 키값이 정해지는 순간에 사용 //실시간으로 원하는 키값을 받아오고 싶을때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj.key); //'key'라는 키값이 없음 undefined  
  console.log(obj[key]);//실시간으로 원하는 키값을 받아오고 싶을때
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

//객체를 리턴해 주는 함수 1
function makePerson(name, age){
    return {
        name: name,
        age: age
    }
}

//property value short hand 기능
//key 와 value의 이름이 같다면 : 를 생략가능
function makePersonShort(name, age){
    return {
        name,
        age
    }
}
//예전에 Javascript에 클래스가 없었을때 함수리턴에 객체를 해줘서 사용했었음

// 4. Constructor Function
//함수의 첫글자가 대문자
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);
// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name='younah';
console.log(`user : ${user.name}`);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
//console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
user.name = 'ellie';
console.log(user4);
// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); //뒤에오는 source가 앞의 source의 프로퍼티를 동일하게 갖고있으면 뒤에정의한 아이의 프로퍼티로 덮어쓴다.
console.log(mixed);
console.log(mixed.color);
console.log(mixed.size);
