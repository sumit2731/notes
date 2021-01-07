let obj = {
    name: 'Andrew'
};

let stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

let obj2 = JSON.parse(stringObj);
console.log(obj2);
console.log(typeof obj2);