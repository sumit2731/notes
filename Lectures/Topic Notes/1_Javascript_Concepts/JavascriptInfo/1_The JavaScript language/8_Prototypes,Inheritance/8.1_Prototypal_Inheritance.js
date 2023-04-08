/* 
1)All objects have [[Prototype]] that is eitherv null or refrences other object.
2)missing properties in objects are looked onto this other object that this [Prototype]
  points to.
3)The property [[Prototype]] is internal and hidden, but there are many ways to set it -
  a)using __proto__ (noy good practice)
  b)Object.setPrototypeOf(obj,protoType)
4)prottype chnains can extend to any level

5)limitation on value of __proto__ property -
  There are only two limitations:
    a)The references can’t go in circles. JavaScript will throw an error if we try to 
      assign __proto__ in a circle.
    b)The value of __proto__ can be either an object or null. Other types are ignored.

6)details of __proto__
  Please note that __proto__ is not the same as the internal [[Prototype]] property. 
  It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters, for now let’s just 
  keep it in mind, as we build our understanding of JavaScript language.
  
  The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests 
  that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the 
  prototype. We’ll also cover these functions later.

  By the specification, __proto__ must only be supported by browsers. In fact though, all environments 
  including server-side support __proto__, so we’re quite safe using it.As the __proto__ notation is a 
  bit more intuitively obvious, we use it in the examples.

7)Writing doesn’t use prototype. but if setter of property is defined in protype and object itself ,
  is not having that property then setter is used.

8)this in methods defined in protypes points to object on which methods were called, this makes
  sure that we modify the state of object, not of prototype.

9)for in loop shows inherited enumrebale properties also. use this method to know property exist
  on object or on its prototype -
    obj.hasOwnProperty(prop)
*/