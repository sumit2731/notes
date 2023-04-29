//1 read mdn docs for super

class Foo {
    foo = 'foo';
}

class Bar extends Foo {
    constructor() {
        super();
        super.foo = 'bar';
        super.bar = 'bar';
    }
}
const c = new Foo();
const b = new Bar();

console.log(c.foo, c.bar);
console.log(b.foo, b.bar);


//2

class Foo {
    static = 2;
    y = 3;
}

class Bar extends Foo {
    static getSum() {
        return (super.x || 0) + (super.y || 0)
    }
}

console.log(Bar.getSum());