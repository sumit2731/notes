let people = [{name: 'sumeet'}, {name: 'kriti'}];


let people2 = people.filter((person,index,array) => {
    array[index] = {name: 'abc'}
    return true;
})

console.log(people);
console.log(people2);