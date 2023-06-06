/* 
types of object fields (properties and methods):

    a)public: accessible from anywhere. They comprise the external interface.
    b)Private: accessible only from inside the class. These are for the internal interface.
    c)protected: accessible only from inside the class and those extending it (like private,
        but plus access from inheriting classes). They are also useful for the internal interface.
        They are in a sense more widespread than private ones, because we usually want inheriting
        classes to gain access to them.

Protected fields are not implemented in JavaScript on the language level, but in practice they are very convenient, so they are emulated.

Protected fields are not implemented in JavaScript on the language level, but in practice they are very convenient, 
so they are emulated.

*/

// ** Protected Fields Emulation *********

/* 
Protected properties are usually prefixed with an underscore _.this is a well-known convention between programmers that such 
    properties and methods should not be accessed from the outside.

to control random read operation - we used setter
*/

/* 
making a proeprty readonly- property should be set only at the creation time
define only getter and set the proeprty at construction time.

*/


// Private “#waterLimit” *************************

/* 
This is a recent addition to the language. Not supported in JavaScript engines, or supported partially yet, requires polyfilling.

    a)Privates should start with #.Privates should start with #. They are only accessible from inside the class.
    b)Private fields do not conflict with public ones. We can have both private #waterAmount and public waterAmount fields 
        at the same time.
    c)we can make waterAmount an accessor for #waterAmount. see example.
    d)Private fields are not available as this[#name]
*/