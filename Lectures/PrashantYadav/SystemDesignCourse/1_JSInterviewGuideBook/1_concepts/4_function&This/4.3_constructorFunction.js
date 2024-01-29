/**
 * Note – There are some methods in JavaScript that when invoked normally behave as a
 * constructor.
 */

const reg1 = RegExp("\\w+");
const reg2 = RegExp("\\w+");
console.log(reg1 === reg2);
// false

/**
 * How to check if function is invoked in connstructor mode or not
 */
function Example(blog) {
  if (!(this instanceof Example)) {
    throw Error("Can be invoked only as a constructor");
  }
  this.blog = blog;
}
