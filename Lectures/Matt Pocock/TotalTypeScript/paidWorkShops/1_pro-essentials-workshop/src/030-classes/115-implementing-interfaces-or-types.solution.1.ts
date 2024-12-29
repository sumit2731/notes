interface ShapeOptions {
  x: number;
  y: number;
}
/**
 * interface mentions the things that need to be present in public api of class.
 * you cannot mention private properties here.
 *
 * class can implement both interface as well as type.
 *
 * class can be use a type also, for example we can define function which receives a paremeter fo type class.
 * define interface like this can be helpful when we want to have ISquare, ICircle etc and they need to
 * have a common API
 */
type IShape = {
  // #name: string;
  position: { x: number; y: number };
  move: (deltaX: number, deltaY: number) => void;
};

class Shape implements IShape {
  #x: number;
  #y: number;
  // you can mention extra properties also
  name: string = "sumeet";

  constructor(initial?: ShapeOptions) {
    this.#x = initial?.x ?? 0;
    this.#y = initial?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}
