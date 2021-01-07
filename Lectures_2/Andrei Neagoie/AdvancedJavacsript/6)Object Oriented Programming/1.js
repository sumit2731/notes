const elf = {
    name: 'Orwel',
    weapon: 'bow',
    attack() {
        return `Attack with  ${elf.weapon}`;
    }
};

const elf2 = {
    name: 'Sally',
    weapon: 'bow',
    attack() {
        return `Attack with  ${elf2.weapon}`;
    }
};

console.log(elf2.attack());