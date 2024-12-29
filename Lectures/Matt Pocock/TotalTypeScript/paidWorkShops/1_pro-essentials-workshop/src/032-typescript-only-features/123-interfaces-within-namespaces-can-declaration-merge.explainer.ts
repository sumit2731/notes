namespace GeometryUtils {
  export namespace Rectangle {
    export interface Rectangle {
      width: number;
      height: number;
    }
  }
}

namespace GeometryUtils {
  export namespace Rectangle {
    export interface Rectangle {
      color: string;
    }
  }
}

/**
 * same name interfaces in same name namespaces are merged
 *
 * Understanding this merging behavior will be useful when we
 * look at global declaration merging later on.
 */

// @ts-expect-error color required!
const rect: GeometryUtils.Rectangle.Rectangle = {
  width: 10,
  height: 20,
};

const rect2: GeometryUtils.Rectangle.Rectangle = {
  width: 10,
  height: 20,
  color: "red",
};
