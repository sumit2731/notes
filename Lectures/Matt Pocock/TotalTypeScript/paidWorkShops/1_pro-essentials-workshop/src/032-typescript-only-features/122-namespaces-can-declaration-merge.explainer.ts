namespace GeometryUtils {
  export namespace Circle {
    export function calculateArea(radius: number) {
      // implementation
    }

    export function calculateCircumference(radius: number) {
      // implementation
    }
  }
}
/**
 * extra from course - we can have them in different files also
 *
 * in non module system where we want to use them, we need to include both of them using '///' syntax
 */
namespace GeometryUtils {
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

// All must be exported or none
// Can't be on different scopes
