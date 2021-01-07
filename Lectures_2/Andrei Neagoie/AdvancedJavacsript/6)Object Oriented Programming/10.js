//ES6 Classes
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return `attack with ${this.weapon}`;
    }
}

const fiona = new Elf('Fiona', 'stones');
console.log(fiona);
console.log(fiona.__proto__);
console.log(Elf.prototype);
console.log(fiona.attack());
const ogre = {...fiona};
console.log(ogre);
console.log(ogre.__proto__);
// console.log(ogre.attack());
