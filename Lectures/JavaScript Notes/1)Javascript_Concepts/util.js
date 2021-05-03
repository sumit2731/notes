function printName(name) {
    console.log(name);
}

export {printName as dummyName1};
//export { dummyName1 as printName};

//export { variable1 as name1, variable2 as name2, …, nameN };