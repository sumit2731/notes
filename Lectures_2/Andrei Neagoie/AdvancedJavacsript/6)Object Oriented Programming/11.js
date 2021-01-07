//ES6 Classes
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return `attack with ${this.weapon}`;
    }
}
class Elf extends Character {}
const fiona = new Elf('Fiona', 'stones');
console.log(fiona);
