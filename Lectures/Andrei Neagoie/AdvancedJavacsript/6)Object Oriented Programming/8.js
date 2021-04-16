function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function () {
    return `attack with ${this.weapon}`;
}

Elf.prototype.build = function() {
    function building() {
        console.log( `${this.name} builds a house`);
    }
    // this will point to global object
    building();
}

const peter = new Elf('Peter', 'stones');
console.log(peter.build());
