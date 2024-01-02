/**
 * @IndexSignature
 */

type Mapish = { [k: string]: boolean };

/**
 * @IndexedAccessType
 */

type Person = {
  id: string;
  name: string;
};

type PersonName = Person["name"];

/**
 * @UserDefinedTypeGuards
 */
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

/**
 * The Function returns a boolean value and also has a shape is Square type predicate at the end, which
 * tells TypeScript that if the function returns true, the type of the shape parameter should be narrowed
 * down to Square.
 */
function isSquare(shape: Shape): shape is Square {
  return shape.kind === "square";
}

function getArea(shape: Shape): number {
  if (isSquare(shape)) {
    return shape.size ** 2;
  } else if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else {
    return Math.PI * shape.radius ** 2;
  }
}

const mySquare: Shape = { kind: "square", size: 10 };
const myRectangle: Shape = { kind: "rectangle", width: 5, height: 8 };
const myCircle: Shape = { kind: "circle", radius: 4 };

console.log(getArea(mySquare)); // 100
console.log(getArea(myRectangle)); // 40

/* 
Tye Inference - When ts guesses the types
Type Annotation - Giving types in javascript
Type Assertions - Type Casting

*/
