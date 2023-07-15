const users = [
    {firstName: 'akshay',lastName: 'saini', age: 26},
    {firstName: 'elon',lastName: 'musk', age: 50},
    {firstName: 'deepika',lastName: 'padukona', age: 26},
];


// returns firstName of users whose age is less than 30

/**
 * Way 1 - use map and filter.
 * drwaback - 2 times looping over same array
 */

/**
 * way 2 reduce
 */

const firstNames = users.reduce((accum, user) => {
    if(user.age < 30) accum.push(user.firstName);
    return accum;
} ,[]);

console.log(firstNames);