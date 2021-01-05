//Don't give up

//1.함수선언 & 호출
//함수 선언
function doSomething() {
    console.log('hello');
}

//함수 호출
doSomething();

//2.값을 리턴하는 함수
function add(a, b) {
    const sum = a+b;
    return sum;
}

const result = add(1,3);
console.log(result);

//3.언어 공부 방법
//자바스크립트는 html과 달리 ui요소가 없기때문에 콘솔로그를찍으며 눈으로 보면서 이해하는게 좋다.
//간단한 예제를 로그를 찍어가며 한줄한줄 따라가자
console.clear();
//4.함수를 인자로 전달
function doSomethingWithFunction(add) {
    console.log(add);
    const result = add(2, 3);//전달받은 함수를 호출가능
    console.log(result);
}

//doSomethingWithFunction(add()); //함수를 실행해서 결과값을 전달 -> 파라미터가 없어서 Nan을 찍음
//doSomethingWithFunction(add(1,2)); //함수를 실행해서 결과값을 전달 ->함수 호출시 필요인자를 꼭 정상적으로 전달해야한다-> 결과 4가 전달
doSomethingWithFunction(add); //함수이름만 전달하면 함수자체를 전달 뒤에 ()안붙이고..
console.clear();
//5.선언 & 호출 복습
const addFun = add;
console.log(addFun);
console.log(addFun(1,2));
