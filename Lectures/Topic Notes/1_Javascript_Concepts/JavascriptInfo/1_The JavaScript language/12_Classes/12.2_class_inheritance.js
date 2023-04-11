/* 
1)inheritance syntax.
    class Child extends Parent {

    }

    Class syntax allows to specify not just a class, but any expression after extends.For instance, a function call
    that generates the parent class. we can see eaxmple in jsInfo docs and links shared here in end of notes.

2)how inheritance works. 
    Child.prototype.[[Prototype]] is set to Parent.prototype

    i.e [[Prototype]] property of Child.prototype points to parent.prototype.
    hence all methods defined on parent.prototype are also avalible to child objects


3)Overriding method
    we define a function in child class then that function is used instead of parent class.
    IF in our child class function we want to call parent class function then use super.
        
        super() - Can be used to call parent class constructor (inside our constructor) only.
        super.method() = Can be used to call functions in parent class.avalible for object literals also.

    arrow functions do not have super. If accessed, it’s taken from the outer function, if outer function is class method.
    If you try to use super in arrow function which is defined as class variable you will get error.also super in normal
    functions gives error, when they are not class methods, there its better to use arrow functions to lock value of this.
    
    For instance:

        class Rabbit extends Animal {
            stop() {
                setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
                setTimeout(function() { super.stop() }, 1000); // this throws error
            }
        }

4)overriding construtor -
    a)default constructor created in child classes.
    b) when constructor is defined in child class, it is mandatory to call super.
        Constructors in inheriting classes must call super(...), and (!) do it before using this.

        reson for above behaviour - because parent class creates the new object and sets this equal to that object.

5)overriding class fields

    tricky behaviour - 
        the parent constructor always uses its own field value, not the overridden one.
        Reason for above is intialization of class fields -
            1)If class does not inherit anything can intialization of class fields happens before constrcutor.
            2)If a class inherits something then intialization of class fields happens just after super call.

6)How it not possible to call functions in parent class(by use of super) just by using this and __proto__ property.
 we saw problem in it, got error - "Maximum call stack size exceeded".

7)To provide the solution, JavaScript adds one more special internal property for functions: [[HomeObject]].
    When a function is specified as a class or object method, its [[HomeObject]] property becomes that object.
    Then super uses it to resolve the parent prototype and its methods.There’s no way to change [[HomeObject]],
    once method is created.

    we can also use super in normal objects(created using object literal syntax not with classes) to call methods on their prototypes.  
    but in normal objects super cannnot called as function.also [[HomeObject]] is only defined in methods which are defined as method(), 
    not as "method: function(). so in later cases we cannot use super. if e use we get error no [[]]
        
    

8)Methods are not “free”
        saw where things can go wrong because use of [[HomeObject]] to resolve super. note that value of super in function is fixed at
        time when function is defined this is because [[HomeObject]] is fixed at that time.So it’s not safe to copy a method with 
        super from one object to another.

9)Methods, not function properties
        [[HomeObject]] is defined for methods both in classes and in plain objects. But for objects, methods must be specified exactly 
            as method(), not as "method: function()". as a result calling methods using super in methods defined using this syntax fails.

            let animal = {
                eat: function() { // intentionally writing like this instead of eat() {...
                    // ...
                }
            };

            let rabbit = {
                __proto__: animal,
                eat: function() {
                    super.eat();
                }
            };

            rabbit.eat();  // Error calling super (because there's no [[HomeObject]])
*/

/* 
    External Links -
        https://forum.kirupa.com/t/js-tip-of-the-day-super-in-object-literals/643138
        https://forum.kirupa.com/t/js-tip-of-the-day-a-functions-home-object/643187
*/

/* 
Special Properties -
    a)[[ConstructorKind]]:"derived" - dervied class constructor has this proeprty. used to give error that derived class must call
        super befor calling this.
    b)[[HomeObject]] - All methods defined in class and in objects(in objects only new syntax should be used) has this property and it points to
            object to which that method belongs. it is used to resolve value of super.

*/