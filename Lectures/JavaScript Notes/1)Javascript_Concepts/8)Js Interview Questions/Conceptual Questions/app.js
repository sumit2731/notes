/**
* Prototypal Inheritance

a)Diffrence between - 
    oco = Object.create( {} );   // create a normal object
            and
    ocn = Object.create( null ); // create a "null" object


b)Solution to be problem encountered in a-
    Solution that do not work -
        1)
            ocn.toString == Object.toString
            ocn.toString() // error: Function.prototype.toString requires that 'this' be a Function
        2)
            Object.setPrototypeOf(ocn, Object); // set new object's prototype to the standard-object
            ocn.toString() // error: Function.prototype.toString requires that 'this' be a Function

    Soltion that work -
        1)
            ocn = Object.create( null );
            Object.setPrototypeOf(ocn, Object.prototype);

*/