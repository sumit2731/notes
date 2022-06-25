function f1(...args) {
    console.log(args);
}

let a = 1, b= 2;
f1`this${a} ${b}`;