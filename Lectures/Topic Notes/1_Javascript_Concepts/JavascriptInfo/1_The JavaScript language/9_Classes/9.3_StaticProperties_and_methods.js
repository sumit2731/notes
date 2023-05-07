/* 
a)Syntax of static methods. this inside static methods refers to class constructor.
    static methods are used to implement functions that belong to the class as a whole, 
    but not to any particular object of it. ex -
        1)we have artcles objects and need a function to compare them.
        2)to create a “factory” method. we can have multiple ways to create a article.
            here we can provide some default arguments for constructor function.
        3)Static methods are also used in database-related classes to search/save/remove 
            entries from the database, like this:

            // assuming Article is a special class for managing articles
            // static method to remove the article by id:
            Article.remove({id: 12345});

b)Static properties - Recent addition to language, some browser might needs polyfills.

c)Static properties and methods are inherited.These are defined directly on construtor 
    function of class(regular methods are define on protype of constructor class).
    we create a prototype chain for constructor functions also.IMP - this is second chain that is setup.
    also In Native objects like Array, Map,Set to dot inherit the Object class.their inehritance is limited
    to prototype only.


See question in last.

important thing to remeber  - Object.[[Prototype]] === Function.prototype

*/