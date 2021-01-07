/* 
*Here we can also use interfaces
*/
type Admin1 = {
    name: string;
    privileges: string[];
}

type Employee1 = {
    name: string;
    /* 
    Date is type suported by ts, it is based on Date Object
    which is built into js 
    */
    startDate: Date;
}

/* 
Intersection types allows us to combine other types.
ElevatedEmployee will have properties - name,privileges,startDate. these proeprties are automatically updated
when type Admin1 and employee2 are chnaged

I will say that Intersection types are closely related to inteface inheritance,
because we can acheive same thing by-

    a)we can define Admin and Employee as interface and then we can use their inter-section 
        and store in a custom type named ElevatedEmployee
    b)Create third interface ElevatedEmployee,it will extend interfaces Admin and Employee. 
        intersection types can used with any other types
*/
type ElevatedEmployee1 = Admin1 & Employee1;

const e1: ElevatedEmployee1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

/* 
However it is worth noting that whilst intersection types can be especially
useful when used in conjuction with object types(like we did here), you can actually use them
with any type. let's see example
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
of these object properties so as to say
*/
type Universal1 = Combinable1 & Numeric1;