//1

const x =  new Boolean(false);

if(x) {
    console.log('if', x== false);
} else {
    console.log('else', x == false);
}


/* 

see 5.1 lecture of jabasvript.info

The condition in the if statement evaluates to true.
Any object, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement.

But truthiness is not the same as being loosely equal to true or false.
x is truthy, but it's also loosely equal to false.
When comparing with false, which is a primitive, x is also converted to a primitive, which is false.

*/