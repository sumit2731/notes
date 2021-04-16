const createCounter = () => {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    };
};

const counter = createCounter();

const createAdder = () => {
    return (b) => {
        return a+b;
    }
};

const add10 =createAdder(10);
console.log(agg10(4));