/* 
Things that happen in strict mode -

    a)value of this is undefined in regularly called function.
    b)assigning a value to undeclared variable results in an error.
    3)For a value property in object, if writable flag is false, IN strict mode ,you will get error when you try to assign value 
        to that property. In non strict mode, you will not get error but operation would not succeed.
    d)trying to add a property in primitive data types results in error in strict mode. in non strict mode, it does not throw
        error but while reading that property we get undefined.

*/
