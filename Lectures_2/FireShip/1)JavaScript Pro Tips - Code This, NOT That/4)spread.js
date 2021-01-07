//1)spread in objects

const pikachu = {name: 'Pikachu'};
const stats = {hp: 40, attack: 60, defense: 45};

//'Bad Object Code'
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

//or
/* const lv10 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, {bp:45}); */

//better way
const lv10 = {...pikachu, ...stats};
const lv11 = {...pikachu, hp: 45};


//2)Spread In Array
let cities = ['Delhi', 'Chd','Pune', 'Mum'];

//Bad Array Code
cities.push('noida');
cities.push('gurgaon');

//better way
//push
cities = [...cities, 'noida', 'gurgaon'];

//unshift
cities = ['noida', 'gurgaon', ...cities];
