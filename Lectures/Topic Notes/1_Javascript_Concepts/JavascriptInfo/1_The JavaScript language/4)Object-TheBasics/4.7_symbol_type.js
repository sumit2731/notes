/* 
Well known symbols -
    1)Symbol.iterator
    2)Symnol.toPrimitive
    3)Symbol.hasInstance - static property which is a function and accepts a value
        When instanceof operator is used on Function or class, then if this propert holds a function
        then that function is called with 1 argument, which is obj used in instanceof.
    4)Symbol.toStringTag - if a propert with this name exist on object, then value decides -
        Object.prototype.toString returns [object ....]. the ... is the value that this proeprty holds 
            in object.
    5)Symbol.species - Static getter defined on class.
        For arrays , sets and maps,a static method with this name can be added. output of this
        method decides the datatype of result some basic function of that datatype.(like for array- map, filter)