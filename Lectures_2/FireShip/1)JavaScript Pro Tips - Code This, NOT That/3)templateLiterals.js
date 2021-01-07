// 2)building strings in functional way

function horseAge(str, age, age1) {
    console.log(str);
    console.log(age);
    console.log(age1);
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

console.log(horseAge([`This horse is `], 4));
//instead of passing arguments to functions,w can attach it to template
//literal

//here argument passed are (['The horse is ',' sumeet ',''],7,89)
//const bio2 = horseAge`This horse is ${7} sumeet ${89}`;

const bio2 = horseAge`This horse is ${7}`;
console.log(bio2);
// You can take single argument and use it to compose  multiple values
// in return string, this use in polymer framework