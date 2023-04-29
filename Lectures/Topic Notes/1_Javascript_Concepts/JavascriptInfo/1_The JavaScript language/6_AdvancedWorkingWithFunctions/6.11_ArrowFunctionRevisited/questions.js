let i = 0;

function counter(logFn) {
    const log = (logFn || (val)) => console.log(val)
    log(i++)
}

counter();


/* 
Because => has a lower precedence than most operators, parentheses are necessary to avoid callback || () being parsed as the 
    arguments list of the arrow function.

*/