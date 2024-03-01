/**
 * declare const brand, it only exists at the type level. Declare const puts something into global
 *  scope, that's basically a type that you can fulfill.
 */
declare const brand: unique symbol;

export type Brand<T, TBrand> = T & { [brand]: TBrand };
