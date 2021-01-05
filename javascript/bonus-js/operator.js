//false: 0, -0, '', null, undefined
//true : -1, 'hello', []//값이 없어도 오브젝트는 주소'값'이 있기 때문에
let num; //false '값'이 없으니까
if(num) {
    console.log('true!');
} else {
    console.log('false!');
}

num = 4; //true
num && console.log(num);

// let obj;
// let obj= {};
let obj = {name:'elle'};
obj.name && console.log(obj.name);
