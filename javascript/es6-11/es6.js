/**
* shorthand property names
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
*/
'use strict'
{
    const ellie1 = {
        name: 'Ellie',
        age: '18'
    };

    const name = 'Ellie';
    const age = '18';

    //👎
    const ellie2 = {
        name: name,
        age: age
    }
    
    //👍 key 와 value의 이름이 같으면 대입식이 생략이 가능
    const ellie3 = {
        name,
        age
    }

    // console.log(ellie2);
    // console.log(ellie3);
}

/**
* Destructuring Assignment
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

{
    //object
    const student = {
        name: 'Anna',
        level: 1
    };

    //👎
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    //👍 Object 의 키네임을 {}로 묶고 오브젝트를 대입하면 알아서 이름매핑해서 값을 넣으줌
    //{}사용 
    {
        const {level, name} = student;
        console.log(name, level);
    }

    
    //👍 키네임을 바꾸고 싶다면?
    {
        const {name : studentName, level : studentLevel} = student;
        console.log(studentName, studentLevel);
    }

    //👍distructuring 은 Object 뿐 아니라 Array에도 사용가능
    //array
    const animals = ['🐶', '🐱', '🐼'];
    
    //👎
    {   
        const first = animals[0];
        const second = animals[1];

        console.log(first, second);
    }

    //👍 들어있는 순서에 맞게 할당 []사용
    {
        const [first, second, third] = animals;
        console.log(first, third);
    }

    /**
     * Spread Syntax
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
     */

     {
        const obj1 = {key: 'key1'};
        const obj2 = {key: 'key2'};
        const array = [obj1, obj2];

        //array copy
        const arrayCopy = [...array]; //...은 배열의 들어있는 각각의 값을 가져오는것
        console.log(array, arrayCopy);

        obj1.key = 'new key';

        const arrayCopy2 = [...array, {key: 'key3'}]; //...은 배열의 들어있는 각각의 값을 가져오는것
        console.log(array, arrayCopy, arrayCopy2);
        //spread Syntax object가 가르키는 주소의 참조값만 복사하기때문에 원래 오브젝트 변경시 모두영향을 받는다
        
        //object copy
        const obj3 = {...obj1};
        console.log(obj3);

        //array concatenation
        const fruits1 = ['🍍', '🥭'];
        const fruits2 = ['🍎','🍓'];
        const fruits = [...fruits1, ...fruits2];
        console.log(fruits);

        //array concatenation
        const dog1 = {
            dog: '🐶'
            
        };
        const dog2 = {
            dog: '🐺'
        };
        const dogs = {...dog1, ...dog2};
        console.log(dogs); //키값이 같으면 뒤에 키의 값으로 덮어씀

     }
}
/**
 * Default parameters
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
    console.clear();
    //💩
    {
        function printMessage(message) {
            if (message === undefined) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('Hello');
        printMessage();
    }

    //✨
    {
        function printMessage(message = 'default message') {
            console.log(message);
        }

        printMessage('Hello');
        printMessage();
    }
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
    const isCat = true;
    //💩
    {
        let component;
        if (isCat) {
            component = '🐱';
        } else {
            component = '🐹';
        }
        console.log(component);
    }

    //✨
    {
        const component = isCat ? '🐱' : '🐹';
        console.log(component);
        console.log(isCat ? '🐱' : '🐹');
    }
    console.clear();
}

/**
 * Template Literals
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
{
    const weather = '⛅';
    const temparature = '16';

    //💩
    console.log(
        'Today weather is ' + weather + 'and temparature is ' + temparature
    );

    //✨
    console.log(
        `Today weather is ${weather} and temparature is ${temparature}`
    );
}
