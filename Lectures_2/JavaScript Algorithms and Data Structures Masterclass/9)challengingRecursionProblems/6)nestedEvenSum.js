/**
 * Write a recursice function "nestedEvenSum" which Return the sum of all even numbers in an object which may contain 
 * nested objects
 */

 /**
  * My Solution and Course Solution
  */

 function nestedEvenSum(object1) {
    let sum = 0
    for (let prop in object1) {
      if (typeof object1[prop] == 'object') sum += nestedEvenSum(object1[prop])
      else {
          if (typeof object1[prop] == 'number' && (object1[prop] % 2 == 0)) sum += object1[prop];
      }
    }
    return sum;
 }

 /* 
 Slighty better my solution
 */
 function nestedEvenSum2(nestedObj) {
    let sumEvenNumbers = 0;
    let properties = Object.getOwnPropertyNames(nestedObj);
    for(let property of properties) {
        if(typeof nestedObj[property] === 'number' && nestedObj[property] %2 === 0) sumEvenNumbers += nestedObj[property];
        else if(typeof nestedObj[property] === 'object') sumEvenNumbers += nestedEvenSum2(nestedObj[property]);     
    }
    return sumEvenNumbers;
}

 var obj1 = {
   outer: 2,
   obj: {
     inner: 2,
     otherObj: {
       superInner: 2,
       notANumber: true,
       alsoNotANumber: "yup",
     },
   },
 };

 console.log(nestedEvenSum(obj1));