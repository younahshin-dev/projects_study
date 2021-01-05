'use strict'

class Counter{
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    //class 안의 함수는 function 생략
    increase() {
        this.counter++;
        console.log(this.counter);

        if (this.counter % 5 === 0) {
            // if (this.callback) {
            //      this.callback(this.counter);
            // }
            this.callback && this.callback(this.counter);
        }
    }
}

//class diagram

const coolCounter = new Counter();
function printSomething(number) {
    console.log(`wow! : ${number}`);
}

function alertSomething(number) {
    alert(`wow! : ${number}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertSomething);


printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(alertSomething);
