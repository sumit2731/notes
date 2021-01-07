/**
 * Write a function called sameFrequency
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * sameFrequency(182,281) => true
 * sameFrequency(34,14) => false
 */

 function sameFrequency(number1, number2) {
     let numberString1 = number1.toString();
     let numberStringObj1 = {};
     let numberString2 = number2.toString();
     let numberStringObj2 = {};
     for(let digit of numberString1) numberStringObj1[digit] = (numberStringObj1[digit] || 0) +1;
     for(let digit of numberString2) numberStringObj2[digit] = (numberStringObj2[digit] || 0) +1;
     for (let digit in numberStringObj1) {
         if (!(numberStringObj1[digit] == numberStringObj2[digit])) return false;
     }
     return true;

 }

 console.log(sameFrequency(1289,9821));