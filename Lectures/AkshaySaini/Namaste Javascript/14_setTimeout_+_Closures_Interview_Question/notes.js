//problem

for(var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i),i*1000)
}


/**
 * Solution1
 * This works because in each iteration of loop, a new copy of i is created
 */

for(let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i),i*1000)
}

/**
 * Solution2
 */

for(var i = 0; i<5; i++) {
    (function(j) {
        setTimeout(() => console.log(j),j*1000)
    })(i);
}