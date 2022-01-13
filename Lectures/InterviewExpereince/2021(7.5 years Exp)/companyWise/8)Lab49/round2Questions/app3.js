let sumCallCount = 0;



function sum() {
    sumCallCount++;
    return Array.from(arguments).reduce((accum, number) => accum+number);
}


let memorizedSum = memmorize(sum);
memorizedSum(100); //1

console.log(sumCallCount);

memorizedSum(100); // 1
console.log(sumCallCount);

memorizedSum(100,200); // 2
console.log(sumCallCount);

memorizedSum(100,200); // 2
console.log(sumCallCount);


/* 
you have to implement the memorize function in above way
*/


function memmorize(sum) {
    let dic = {};
    return function(...parameters) {
        let uniqueKey = parameters.join('');
        let result = dic[uniqueKey];
        if(result) return result;
        else {
            dic[uniqueKey] = sum(...parameters);
            return dic[uniqueKey];
        }
    }
}