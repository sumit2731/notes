let cache = {};
function memorizeAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('Long Time');
        cache[n] = n+ 80;
        return cache[n];
    }
}

console.log('1', memorizeAddTo80(5));
console.log('2', memorizeAddTo80(5));