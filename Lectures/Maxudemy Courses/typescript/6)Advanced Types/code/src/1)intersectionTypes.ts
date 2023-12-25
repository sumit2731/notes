/*
 *Here we can also use interfaces
 */
type Admin1 = {
  name: string;
  privileges: string[];
};

type Employee1 = {
  name: string;
  startDate: Date;
};

/* 
Intersection types allows us to combine other types.
ElevatedEmployee will have properties - name,privileges,startDate. 
*/
type ElevatedEmployee1 = Admin1 & Employee1;

const e1: ElevatedEmployee1 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

/* 
However it is worth noting that whilst intersection types can be especially
useful when used in conjuction with object types(like we did here), you can actually use them
with any type. let's see example.

here they are used on union type and result of intersection is type common in both unions
*/

type Combinable1 = string | number;
type Numeric1 = number | boolean;

/* 
Here type of Universal is number, because that is only intersecton
we have here. but if we have more intersections then type
that is assigned to Universal will be of Union type.

so intersection operator can be used with any types and it then just builds
the intersection of these types. IN case of union typs that is basically the types
that they have in common. In case of Object types, it's basically the combination
of these object properties so as to say.

apart from these types it return never.
*/
type Universal1 = Combinable1 & Numeric1;

/**
 * Extra from lesson if you try to use intersection on non object types
 * and types which are not nion, you get never type.
 *
 * While you apply intersection on object types, intersection is applied on each property of object,
 *
 * if value of property in both types is object then it is combined. if ot is primitive then it
 * returns never type
 */
type NewType = string & number;
