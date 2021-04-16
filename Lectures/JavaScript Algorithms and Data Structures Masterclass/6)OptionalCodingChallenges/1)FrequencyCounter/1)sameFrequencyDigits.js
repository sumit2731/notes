/**
 * Write a function called sameFrequency
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * sameFrequency(182,281) => true
 * sameFrequency(34,14) => false
 */


 function sameFrequency(num1, num2) {
     if(num1.toString().length !== num2.toString().length) return false;
    let numObj = {};
    for(let digit of num1.toString()) {
        numObj[digit] = (numObj[digit] || 0)+1;
    }
    for(let digit of num2.toString()) {
        if(numObj[digit]) numObj[digit]--;
        else return false;
    }
    return true;
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));