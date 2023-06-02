// function debounce(func, time) {
//     let lastInvocationTiime;
//     return function debounceHelper(...args) {
//         //never Invoked
//         if (!lastInvocationTiime) {
//             lastInvocationTiime = Date.now();
//             func.call(this, ...args);
//         }
//         else {
//             if (time > (Date.now() - lastInvocationTiime)) setTimeout(() => debounceHelper.call(this), time - lastInvocationTiime)
//             else {
//                 lastInvocationTiime = Date.now();
//                 func.call(this, ...args);

//             }
//         }
//     }
// }

function debounce(func, time) {
    let setTimeoutRefrence;
    return function debounceHelper(...args) {
        if (setTimeoutRefrence) clearTimeout(setTimeoutRefrence);
        setTimeoutRefrence = setTimeout(func.bind(this), time, ...args);
    }
}


let i = 0;
const increment = debounce(() => {
    i++;
}, 50);

console.log(i)//.toBe(0);
increment();
increment();
increment();
increment();
console.log(i)//.toBe(0);

// Should not fire yet.
setTimeout(() => {
    console.log(i)//.toBe(0);
}, 25);

setTimeout(() => {
    console.log(i)//.toBe(1);
}, 75);

