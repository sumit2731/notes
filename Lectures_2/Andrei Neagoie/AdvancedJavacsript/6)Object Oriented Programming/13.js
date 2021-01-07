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
    constructor(name, weapon, type) {
        // console.log(this);
        super(name, weapon);
        this.type = type;
    }
}


class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return `Strongest fort in the world made`;
    }
}


const dolby = new Elf('Dolby','cloth', 'house');
const shrek = new Ogre('Shrek', 'club', 'green');
console.log(Ogre.prototype);
console.log(Ogre.prototype.makeFort());













