let a = {name: 'Sumeet Sood', age: 27,id:1, city: 'pune'};
let b = {name: 'Kriti Gupta', age:30, id:2, city: 'Gurgaon'};
let c = {name: 'Nitesh Ganotra', age:40, city: 'ferozpur'};
// Computed property names
//console.log({a,b,c});
// css in log
console.log('%c My_Friends', 'color: orange; font-weight: bold;');
//table
console.table([a,b,c]);

//cosole.time
console.time('Sumeet');
let i = 0;
while(i< 100000000) { i++}
console.timeEnd('Sumeet');


//console.trace
function f1(name) {
    console.log(name);
    console.trace('It is called from where?');
}

f1('sumeet'); 
f1('kriti');