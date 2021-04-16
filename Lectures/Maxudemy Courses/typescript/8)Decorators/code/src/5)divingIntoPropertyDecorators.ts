/* 
Arguments to decorator fucntion depends upon where that
decorator function is added. if we add decorator to property
of class, then we get 2 arguments.

First Argument is target of property and for instance property, it will be the
prototype of the object created. for static proeprty, target wil be constructor
function. so here we give first argument type of any, becuase we dnt know its exact
structure.

second srgument is name of property, it could be string or symbol, becaue we dnt know what we
use as property identifiers
*/
function Log(target: any, propertyName: string | Symbol) {
    console.log("Property Decorator");
    console.log(target);
    console.log(propertyName);
}

class Product {
    /**
     * @This Decorator function runs when class defination is registered by js
     * so it is executed when you define this property basically to javascript
     * as part of your class here
     */
    @Log
    title: string;
    private _price: number;

    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid Price - Should be Positive");
            
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1+tax);
    }
}