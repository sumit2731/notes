/* 
Property flags

Object properties, besides a value, have three special attributes (so-called “flags”):

    writable – if true, the value can be changed, otherwise it’s read-only.
    enumerable – if true, then listed in loops, otherwise not listed.
      for..in loop 
      Object.keys()
      Object.values()
      in spread syntax
    configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
        when false, properties cannot be deleted, flags cannot be changed but we can assign new value of property

We didn’t see them yet, because generally they do not show up. When we create a property “the usual way”, all of them are true. 
*/


/* 
API's -

Object.getOwnPropertyDescriptor(obj, propertyName)

Object.defineProperty(obj,propertyName,descriptor)

Object.getOwnPropertyDescriptors(obj)
Object.defineProperties(obj, propertiesDescriptors),

Object.preventExtensions(obj) - cannot add new properties
Object.seal(obj) - cannot add/remove properties. and for all properties congigurable flag is set false.
Object.freeze(obj) - canot add/remove/change properties. for existing properties configurable and writable flag is set to false.



*/