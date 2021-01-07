// 1) Obect destructuring

let emp = {name: 'Sumeet', age: 27, city: 'London', Origin: 'India'};

/* function printInfo(emp) {
    console.log(`${emp.name} is of ${emp.age}, he lives in ${emp.city}`);
} */

/* function printInfo({name,age,city}) {
    console.log(`${name} is of ${age}, he lives in ${city}`);
} */

function printInfo(emp) {
    const {name, age, city} = emp;
    console.log(`${name} is of ${age}, he lives in ${city}`);
}
printInfo(emp);