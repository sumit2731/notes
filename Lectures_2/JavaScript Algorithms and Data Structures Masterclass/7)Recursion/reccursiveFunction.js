//function 1

function countDown(num) {
    /* 
    *It is our base case
    */
    if(num <= 0) {
        console.log("All Done");
        return;
    }
    console.log(num);
    num --;
    countDown(num);
}

//countDown(10);


//function 2

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

//sumRange(2);

//function 3

function factorial(num) {
  if (num == 1) return num;
  return num * factorial(num - 1);
}

console.log(factorial(99));


/**
 *Helper Method Pattern
 */

function collectOddValues(arr) {
    let result = [];
    
    function helper(helperInput) {
        if(helperInput.length == 0) return;

        if(helperInput[0] % 2 !== 0) result.push(helperInput[0])
        helper(helperInput.slice(1));
    }
    helper(arr);

    return result;
}


/**
 *Pure Recursion Pattern. see figure
 */

function collectOddValues(arr) {
    let newArray = [];
    if(arr.length == 0) {
         return newArray;
    }
    if (arr[0] % 2 !== 0) {
        newArray.push(arr[0]);
    }
    newArray = newArray.concat(collectOddValues(arr.slice(1)));
}
