/* 
So the idea of the list of substitution principle is that if you have some method for example some 
    function which takes some base type it should also equally be able to take a derived type. let's
    see what does it means. so we have rectangle class with constructor, get area and toString function.

niw we decide to have square, which has same width and height. so it inherits rectamge. but problem is we 
need to enforce that heght and width of sqaure are same. otherwise anyone can chnage it as shown in code.
*/


class Rectangle1 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }


  get area() {
    return this.width * this.height;
  }

  toString() {
    return `${this.width}×${this.height}`;
  }
}

class Square1 extends Rectangle1 {
  constructor(size) {
    super(size, size);
  }
}

let sq1 = new Square1(5);
sq1.width = 10;

/* 
So how can we fix this.Well one really dangerous way of fixing this problem would be to rewrite both rectangle as 
    well as square to use getters and setters instead of just ordinary or their fields as we are. here is that
    approch. so we set up setter and getter for Rectange.

For Square, now what you want to do or what you might be tempted to do is to make sure that whenever there is

    a setter for with a height you said both both sides. now when we chnage one side other sidd in square is also,
    chnaged so square remains squar.
*/

class Rectangle2 {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }
  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width}×${this._height}`;
  }
}

class Square2 extends Rectangle2 {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value;
  }

  set height(value) {
    this._width = this._height = value;
  }
}

/* 
So the problem is that you can you can have functions which work with a base class rectangle but which 
    fail completely with a derived class.Lets see a example where it fails. so in we chnage height to 10. 
    so we expect area to be 10 times height. but it is not.

    We've broken this entire function.So the function should work just fine because if it takes a rectangle 
        as we see here then it should be able to take any inheritor of rectangles such as a square.And that's 
        precisely the point of the list of substitution principle so essentially the LSP the list of substitution 
        principle says that if you have let's say a function which takes a base class like rectangle it should be 
        able to take a derived class like square without breaking the functionality in any way whatsoever.

so how do we fix it? Well I would argue that this entire approach is wrong.the entire idea of making a square as 
    opposed to just defining it as a special case of rectangle is a wrong approach.the way I would do this is I would 
    just keep a rectangle.But if you do really want to make a square then maybe there is a  factory method, You can make 
    to manufacturer a square or you can have some sort of get is Square for example where you return a boolean 
    value when the width is equal to the height and you would also avoid this issue of inheritance with the fields 
    and the field getters.

But the real takeaway from this whole thing is that sometimes you can introduce a derived class which
    breaks as existing functionality, so the base class works just fine but the drive class runs afoul of certain 
    assumptions like it happened here. So I will get rid of the squared class completely I would have some sort of 
    special case.

Have some checks in here, but not keep a separate class for a square at all and if you think you can

think of other solutions feel free to post them it would be interesting what you come up with.

But this is a good illustration of the list of substitution principle in action.


*/

let useIt = function (rc) {
  let width = rc._width;
  rc.height = 10;
  console.log(`Expected area of ${10 * width}, ` + `got ${rc.area}`);
};

let rc2 = new Rectangle2(2, 3);
useIt(rc2);

let sq2 = new Square2(5);
useIt(sq2);