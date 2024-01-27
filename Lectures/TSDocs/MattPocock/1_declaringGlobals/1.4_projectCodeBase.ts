/**
 * @DefiningTYpes
 * we define a type somewhere in code
 */

declare module Perfecto {
  export interface FailureReason {
    id: string;
    name: string;
    color: string;
    disabled: boolean;
  }

  export interface FailureReasonCount extends FailureReason {
    count: number;
  }
}

/**
 * In other Files it is used like this -
 */

/**
 * @param {Perfecto.FailureReason} failureReason
 */

function f1(p: failureReason) {}

/**
 * @Defining Return types for some files
 */

declare module "*.png" {
  const imageUrl: string;
  export default imageUrl;
}
