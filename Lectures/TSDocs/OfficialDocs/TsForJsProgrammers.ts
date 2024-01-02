/**
 * @StructuralTypeSystem
 * 
 * One of TypeScript’s core principles is that type checking focuses on the shape that values have.
 * This is sometimes called “duck typing” or “structural typing”.
    In a structural type system, if two objects have the same shape, they are considered to be of
    the same type.
 */

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

/* 
The shape-matching only requires a subset of the object’s fields to match.
*/

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

//There is no difference between how classes and objects conform to shapes:

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"

/* 
If the object or class has all the required properties, TypeScript will say they match, regardless of the
implementation details.
*/
