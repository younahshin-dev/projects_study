//1. Use strict
//added in ES 5
//use this for Vanila Javascript.
'use strict';

//2. Variable, rw(read/write)
//let (added in ES6) 
let globalName = 'global Name';

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}


console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting move declaration from bottom to top <hoisting : 어디에 선언했냐에 상관없이 선언을 제일 상위에 끌어올리는 것을 말합니다.
// has no block scope : 블록을 무시 블록안에 선언해도 블록밖에서도 출력이 가능 (어디에서나) 초창기 유연성을 위해 사용했었지만 선언하지도 않은 값들이 할당되는 단점이 있다
var age;
//console.log(age); //undefined 선언하지 않아도 값이 나옴
//age = 4;

// 3.Constant , r(read only)
//use const whenever possible.
//only use let if variable needs to change.
// favor immutable data type always for a few reasons : (왠만하면 불변데이터를 사용하는 이유)
// - security (해커들이 변수를 변경하는것을 방지)
// - thread safety (프로세스 사용중 동시에 변경할경우 위험)
// -reduce human mistakes 
const daysInWeek = 7;
const maxNumber = 5;

//Note !
//Immutable data types: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons : (왠만하면 불변데이터를 사용하는 이유)
// - security (해커들이 변수를 변경하는것을 방지)
// - thread safety (프로세스 사용중 동시에 변경할경우 위험)
// -reduce human mistakes 

// 4.Variable types
// primitive (더이상 쪼개지지 않는 하나의 아이템), single item : number, string, boolean, null, undefined, symbolic 
// object, box container
// function, first-class function : 함수형 변수, 함수의 파라미터나 리턴변수로 함수를 사용가능

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
console.log(typeof size);

const infinity = 1 /0;
console.log(infinity);
const negativeInfinity = -1 /0;
console.log(negativeInfinity);
const Nan = 'not a number' / 2;
console.log(Nan);

// bigInt (fairly new, don't use it in yet)
const bigInt = 1232132123232131213123123n;// over (-2**53 ~ 2*53)
console.log(`value: ${bigInt} type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
console.log(Number.MAX_SAFE_INTEGER);

//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+brendan;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string) 'vactic 을 이용해서 변수를 이용가능` 따옴표 아님
console.log(helloBob);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null : 값이 텅텅 빈상태
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined : 값이 할당되지 않은 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

// console.log(`value: ${symbol1}, type : ${typeof symbol1}`); //error
console.log(`value: ${symbol1.description}, type : ${typeof symbol1.description}`); //.description 으로 string 변환

// object, real-life ovject, data structure
const ellie = { name:'ellie', age : '18'};
ellie.age = 21;
console.log(`value: ${ellie.age}, type: ${typeof ellie.age}`);

//5. Dynamic typing: dynamically typed language : 런타임에 타입이 변함 -> 이런 타입변환때문에 타입스크립트가 나옴
let text = 'hello';
console.log(`value: ${text}, type : ${typeof text}`); 
text = 1;
console.log(`value: ${text}, type : ${typeof text}`); 
text = '7'+5;
console.log(`value: ${text}, type : ${typeof text}`); 
text = '8' / '2';
console.log(`value: ${text}, type : ${typeof text}`); 
