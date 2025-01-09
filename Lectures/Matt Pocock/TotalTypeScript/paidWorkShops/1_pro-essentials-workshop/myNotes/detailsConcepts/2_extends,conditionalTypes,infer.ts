/**
 * @extends
 *
 * A extends B - if value of type A can be assigned to typeB. types -
 *   a)objTypeA extends objTypeB - If objTypeA has all properties in objTypeB. It can also
 *      have extra properties. see 208
 *   b)UnionTypeA extends UnionTypeB -UnionTypeA is a subset of UnionTypeB(each value of UnionTypeA is
 *     present in UnionTypeB, UnionTypeB can have some extra values)
 *
 */

/**
 * @conditional types
 *
 * read ts handbook docs
 *    a)When type on left can be assigned to type on right, then first expression is returned otherwise second
 *      one is returned - see exercise 28 of totalTypescript
 *
 *    b)When conditional types act on a generic type, they become distributive when given a union type.
 *     This is the basis of how Extract and Exclude works.see exersixe 28 of total typescript
 *
 *    c)inside truthy part of conditionals, we know the type so type narrowing works
 */

/**
 * @infer
 *
 * read ts handbook docs - infer can be used to infer types in type that we are comparing to.
 *
 * see definition of Awaited type
 * totalTypeScript lecture 24 - infer can be used to extract types from generics
 * totalTypescript lecture 25 - how infer works with template literals
 * totalTypescript lecture 27 -  we can name infered variable with same name in different parts of union
 */
