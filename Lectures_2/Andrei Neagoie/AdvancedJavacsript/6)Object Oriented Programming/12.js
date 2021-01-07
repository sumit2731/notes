//ES6 Classes
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        console.log(this);
    }
    attack() {
        return `attack with ${this.weapon}`;
    }
}
class Elf extends Character {
    constructor(name , weapon, type) {
        // console.log(this);
        super(name,weapon);
        this.type = type;
    }
 }


 console.log(Character.prototype === Elf.prototype.__proto__);
 console.log(Character.prototype);
console.log(Elf.prototype);
console.log(Elf.prototype.__proto__);
const fiona = new Elf('Fiona', 'stones','sumeet');
console.log(fiona.attack());
