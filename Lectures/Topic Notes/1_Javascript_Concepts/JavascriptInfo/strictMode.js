/* 
Things that happen in strict mode -

    a)value of this is undefined in regularly called function.
    b)assigning a value to undeclared variable results in an error.
    c)For a value property in object, if writable flag is false, IN strict mode ,you will get error when you try to assign value 
        to that property. In non strict mode, you will not get error but operation would not succeed.
    d)trying to add a property in primitive data types results in error in strict mode. in non strict mode, it does not throw
        error but while reading that property we get undefined.
    e)trying to chnage part of string throws the error. str[0] = 's'

*/

/* 
Strict mode is turned on automatically in -

    a)ESM modules all code is written in strict mode.
    b)IN classes also all code is written in strict mode

*/
