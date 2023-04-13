/* 
Well known symbols -
    1)Symbol.iterator
    2)Symnol.toPrimitive
    3)Symbol.species - For arrays , sets and maps,a static method with this name can be added. output of this
        method decides the datatype of object on which some basic function of that datatype is aclled.
    4)Symbol.hasInstance - When instanceof operator is used on Function or class, then if this propert holds a function
        then that function is called with 1 argument, which is obj used in instanceof
    5)Symbol.toStringTag - Object.prototype.toString returns [object ....]. the ... is the value that this proeprty holds 
        in object.