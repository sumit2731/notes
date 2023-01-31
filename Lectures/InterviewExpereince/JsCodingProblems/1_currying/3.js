/* 
Coding Problem 2 -
    sum(1)()
    sum(1)(2)()
    sum(1)(2)(3)()

*/



console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3)());



function sum(param1) {
    let combinedParam = [param1];
    return function wrapperFunction(param2) {
        if(param2) {
            combinedParam.push(param2);
            return wrapperFunction;
        }
        else return combinedParam.reduce((accum, currentValue) => accum + currentValue);

    }
}


function sum2(number1) {
    return function wrapperFunction(number2) {
        if(number2) {
            number1 += number2;
            return wrapperFunction;
        }
        else return number1
    }
}