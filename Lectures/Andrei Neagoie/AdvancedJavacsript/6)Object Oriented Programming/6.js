function Elf(name, weapon) {
    console.log(this);
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function () {
    return `attack with ${this.weapon}`;
}

console.log(Elf.prototype);

const peter = new Elf('Peter', 'stones');
console.log(peter);
const sam = new Elf('Sam', 'Fire');
console.log(sam);