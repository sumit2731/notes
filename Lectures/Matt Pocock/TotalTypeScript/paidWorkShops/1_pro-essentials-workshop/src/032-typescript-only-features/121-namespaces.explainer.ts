namespace GeometryUtils {
  export namespace Circle {
    export function calculateArea(radius: number) {
      // implementation
    }

    export function calculateCircumference(radius: number) {
      // implementation
    }
  }

  export namespace Rectangle {
    export interface Rectangle {
      width: number;
      height: number;
    }
    export function calculateArea(rect: Rectangle) {
      // implementation
    }

    export function calculatePerimeter(rect: Rectangle) {
      // implementation
    }
  }
}

// Can be used as values... (because at run time it compiles down to objects)
GeometryUtils.Circle.calculateArea(10);

// ...or as types
const rect: GeometryUtils.Rectangle.Rectangle = {
  width: 10,
  height: 20,
};

/**
 * This is a feature that I don't think you should be using.
  It has some uses and we will explore them later in this course. But it's not great if you're 
  just wanting to do the job that modules already do, because modules just do that job better. 
  If you want to just create a set of utilities, maybe organize your types a little bit better, 
  then perhaps you can use them.

  But I really can't see much functionality for them, to be honest. Namespaces, I think, are kind 
  of like a dead feature in TypeScript. You will encounter them because they're used to organize 
  types that are in the global scope, for instance, like the Node.js types contain a lot of 
  namespaces.

 But in your application code, I would not advise using namespaces.
 */
