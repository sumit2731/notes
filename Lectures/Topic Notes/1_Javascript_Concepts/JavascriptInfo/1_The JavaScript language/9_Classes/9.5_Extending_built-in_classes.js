/* 
a)How we can extend build in classes like arrays and define our method on top of them.
b)In case of array we saw that when we extend a class from array and call functions like map, filter and other-
    all return new objects of inherited type.Their internal implementation uses the object’s constructor property for that.

    arr.constructor === PowerArray

    Above things needs to be kep in mind while polyfilling the popular js methods.

c)we can customize that behavior specified in step b.We can add a special static getter Symbol.species to the class. If it exists,
    it should return the constructor that JavaScript will use internally to create new entities in map, filter and so on.
    other collections like map,set also work in similar way.default behaviour is when some class extends Array then this static
    property points to new class.

d)diffrence between inheritance of built in objcets(Array, Function, Date) inherit from number and what we get via extend
    property.static methods are not extend in built in objects.this is because in in built inheritance only protypes are inherited
    function onjects are not inherited.see figure1.

*/

/* 
Important properties -
    a)[Symbol.species]

*/