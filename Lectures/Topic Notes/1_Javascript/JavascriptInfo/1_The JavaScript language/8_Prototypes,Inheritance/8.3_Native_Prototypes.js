/* 
1)When we create objects using object literal notation, we are actually calling Object function is contructor mode.
    prortype property in this Object Function points to Object which has all methods that default object has.

    also prototype of this Object Protype is null, so chain ends here.


2)Other built in prototypes - see figure 3.

3)primitives
    As we remember, they are not objects. But if we try to access their properties, temporary wrapper objects are created 
        using built-in constructors String, Number and Boolean. They provide the methods and disappear.
        
    These objects are created invisibly to us and most engines optimize them out, but the specification describes it exactly
        this way. Methods of these objects also reside in prototypes, available as String.prototype, Number.prototype and 
        Boolean.prototype.

    Values null and undefined have no object wrappers - Special values null and undefined stand apart. They have no object 
        wrappers, so methods and properties are not available for them. And there are no corresponding prototypes either.

4)Adding methods to native prottypes are bad idea.
    Prototypes are global, so it’s easy to get a conflict. If two libraries add a method String.prototype.show, then one of 
    them will be overwriting the method of the other.

    So, generally, modifying a native prototype is considered a bad idea.

    In modern programming, there is only one case where modifying native prototypes is approved. That’s polyfilling.
    Polyfilling is a term for making a substitute for a method that exists in the JavaScript specification, but is not 
        yet supported by a particular JavaScript engine.We may then implement it manually and populate the built-in prototype
        with it.

5)Borrowing from prototypes

questions - https://javascript.info/native-prototypes#add-the-decorating-defer-to-functions. implement this for object method.
*/
