//ES6 Classes
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        console.log(this);
    }
    _attack() {
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


const dolby = new Elf('Dolby', 'cloth', 'house');
const shrek = new Ogre('Shrek', 'cloth', 'green');
// still possible even after adding _
// shrek._attack();
// shrek._attack= true;














