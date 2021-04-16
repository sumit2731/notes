// function createElf(name, weapon) {
//     return {
//         name: name,
//         weapon: weapon,
//         attack() {
//             return `attack with ${weapon}`;
//         }
//     }
// }

// Es6 Syntax


function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return `attack with ${weapon}`;
        }
    }
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());
const sam = createElf('Sam', 'Fire');
console.log(sam.attack());