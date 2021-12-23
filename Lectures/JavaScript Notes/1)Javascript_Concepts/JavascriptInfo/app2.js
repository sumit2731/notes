// function* randomGenerator(number) {
//     let startingNumber = number;
    
//     console.log(startingNumber);
//     while(true) {
//         startingNumber *= 10;
//         yield startingNumber;
//     }
// }

// let iterator = randomGenerator(1);
// console.log(iterator.next());
// console.log(iterator.next());


function randomGenerator(number) {
    let startingNumber = number;
    return {
        next: function() {
            startingNumber *= 10;
            return startingNumber;
        }
    }
}

let iterator = randomGenerator(1);
console.log(iterator.next());
console.log(iterator.next());