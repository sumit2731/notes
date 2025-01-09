/**
 * only allow these values in union
 *
 * T can be either member of u ion or it can be union where each member of union is inside other union
 */
type Example<T extends "a" | "b" | "c"> = T;
/**
 * Only allow non null values
 */

type Example2<T extends {}> = T;

/**
 * T is object and it must have id property, but it can have more proeprties also
 */

type Example3<T extends { id: string }> = T;
