class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(runIf5Times) { // 클래스에 함수가 있을 때에는 function이라고 작성하지 않아도 된다.
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }
}
function printSomething(num) {
    console.log(`Wow! ${num}`);
}
function alertNum(num) {
    alert(`alert! ${num}`);
}

const coolCounter = new Counter();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase(alertNum);