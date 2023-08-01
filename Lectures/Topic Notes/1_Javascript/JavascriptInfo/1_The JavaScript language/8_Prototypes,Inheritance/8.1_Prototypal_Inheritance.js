/* 
1)All objects have [[Prototype]] that is either null or refrences other object.

2)The property [[Prototype]] is internal and hidden, but there are many ways to set it -
  a)using __proto__ (no good practice)
  b)Object.setPrototypeOf(obj,protoType)
4)prottype chains can extend to any level

5)limitation on value of __proto__ property -
  There are only two limitations:
    a)The references can’t go in circles. JavaScript will throw an error if we try to 
      assign __proto__ in a circle.
    b)The value of __proto__ can be either an object or null. Other types are ignored.

6)__proto__ is getter/setter for [[Prototype]] property
 
7)Writing doesn’t use prototype. but if setter of property is defined in protype and object itself ,
  is not having that property then setter is used.

8)this in methods defined in protypes points to object on which methods were called, this makes
  sure that we modify the state of object, not of prototype.

9)for in loop shows inherited enumrebale properties also. use this method to know property exist
  on object or on its prototype -
    obj.hasOwnProperty(prop)
    
*/

/* 
API -
  1)obj.hasOwnProperty(prop)
  2)obj.isPrototypeOf(obj2)
  2)Object.getPrototypeOf(obj)
  3)Object.setPrototypeOf(obj, protoObject)


*/

/* 
Performance -

In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. 
They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there.
They are also smart enough to update internal caches if something changes, so that optimization is safe.
*/