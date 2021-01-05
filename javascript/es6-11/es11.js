'use strict'
/**
 * Optional Chaining
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob'
            }
        }
    };
    const person2 = {
        name: 'Bob',
    };

    //💩💩💩💩💩💩💩💩💩
    {
        function printManager(person) {
            console.log(person.job.manager);
        }
        printManager(person1);
        //printManager(person2);
    }

    //💩💩💩
    {
        function printManager(person) {
            console.log(
                person.job
                    ? person.job.manager
                        ? person.job.manager.name : undefined
                        :undefined
            );
        }
        printManager(person1);
        printManager(person2);
    }

    //💩
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }
    //코드가 반복되는 나쁜 냄새가 난다

    //✨ 핫트렌드 옵셔널 채이닝
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
    console.clear();
    //Logical OR operator
    //false : false, '', null, 0, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = ''; //난 userName에 빈스트링을 넣고 싶다고!!! 할때 문제발생
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = 0; //값이 있는거 아니니? 할때 문제 발생
        const userName = name || 'Guest';
        console.log(userName);
    }

    //✨값이 있다면을 체크하고싶으면 이것을 사용하자
    {
        const name = '';
        const userName = name ?? 'undefined';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}
