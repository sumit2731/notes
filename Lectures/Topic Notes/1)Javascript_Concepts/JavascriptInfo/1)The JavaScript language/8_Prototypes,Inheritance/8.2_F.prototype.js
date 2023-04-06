/**
 * Basics about F.prototype property
 */

/* 
Default F.prototype, constructor property

    Every function has the "prototype" property even if we don’t supply it.The default "prototype" is an object with the only 
    property constructor that points back to the function itself.

    uses -
        1)to check if a object was created by calling a given function in constructor mode.
        2)to create more objects by calling same function in constructor mode.

    All uses above are possible only if default prototype of function object is not changed.So, to keep the right "constructor" we 
    can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:
*/

function Rabbit() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true;
// the default Rabbit.prototype.constructor is preserved

//Or, alternatively, recreate the constructor property manually:

Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit,
};

// now constructor is also correct, because we added it
/* 
Question -

function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // undefined

*/
