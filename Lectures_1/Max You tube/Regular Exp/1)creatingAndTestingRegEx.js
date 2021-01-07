const text1 = 'Hello there ll!';
let regex = new RegExp("ll");
//let regex = /ll/;
let text = "Hello there ll!";

//true
console.log(regex.test(text1));

// 2
console.log(text.search(regex));

//  [ 'll', index: 1, input: '/ll/', groups: undefined ]
console.log(regex.exec(regex));

//[ 'll', index: 2, input: 'Hello there!', groups: undefined ]
//console.log(text.match(regex)); 




