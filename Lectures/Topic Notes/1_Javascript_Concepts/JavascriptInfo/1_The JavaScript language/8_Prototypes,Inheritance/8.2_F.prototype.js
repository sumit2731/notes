/* 
Below code leads to figure1
*/

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true

/* 
F.prototype only used at new F time
  F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.
  If, after the creation, F.prototype property changes (F.prototype = <another object>), then new objects
  created by new F will have another object as [[Prototype]], but already existing objects keep the old one.

*/

/* 
Default F.prototype, constructor property

Every function has the "prototype" property even if we don’t supply it.
The default "prototype" is an object with the only property constructor 
that points back to the function itself.

*/

/* 
We can use constructor property to create a new object using the same constructor as the existing one - see figure 2.

That’s handy when we have an object, don’t know which constructor was used for it (e.g. it comes from a 3rd party library), 
and we need to create another one of the same kind.

*/

function Rabbit2(name) {
  this.name = name;
  alert(name);
}

let rabbit2 = new Rabbit("White Rabbit");

let rabbit3 = new rabbit.constructor("Black Rabbit");


/* 
But probably the most important thing about "constructor" is that…

…JavaScript itself does not ensure the right "constructor" value.

Yes, it exists in the default "prototype" for functions, but that’s all. What happens with it later – is totally on us.

In particular, if we replace the default prototype as a whole, then there will be no "constructor" in it.

*/

function Rabbit3() {}
Rabbit3.prototype = {
  jumps: true
};

let rabbit4 = new Rabbit3();
alert(rabbit.constructor === Rabbit); // false

/* 
So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:
*/
function Rabbit5() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit5.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved

/* 
Or, alternatively, recreate the constructor property manually:
*/

Rabbit6.prototype = {
  jumps: true,
  constructor: Rabbit6
};

// now constructor is also correct, because we added it

/* 
question - https://javascript.info/function-prototype#create-an-object-with-the-same-constructor

*/

function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // undefined