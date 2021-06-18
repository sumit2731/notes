//---------------------------------------------Pormise Problem - Important Concept-----------------------------------
function p1() {
  return new Promise((resolve, reject) => setTimeout(() => resolve(1), 5000));
}

let p2 = new Promise((resolve, reject) => setTimeout(() => resolve(p1()), 5000));


/*
here we get the value emitted by promise retured by p1 function, not the promise itslef
this is concept used in polyfill implementtion of Promise.allSEttled
*/
p2.then(val => console.log(val));