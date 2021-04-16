/**
 * My Solution without using reccursion 
 */
function fiboSeries(number) {
    let arr = [1,1], i = 2;
    
    while(i < number) {
        let nextNUmber = arr[i-1] + arr[i-2];
        arr.push(nextNUmber);
        i++;
    }
    return arr[i-1];
}

console.log(fiboSeries(45));

/**
 * Solution given in course, this is very slow
 */
function fib(n) {
  if(n ==1 || n== 2) return 1;
  return (fib(n-1) + fib(n-2));
}

console.log(fib(45));

