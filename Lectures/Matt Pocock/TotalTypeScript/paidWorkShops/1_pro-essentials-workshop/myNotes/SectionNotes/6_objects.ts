/**
 * 81 - 83
 *  (1-4 in videos) - Types vs interfaces. extends is better than intersection
 *   video 3 shows Interfaces gives warning againts incompatible type
 */

/**
 * 84(5) - Only one index signature per object type is allowed
 *
 * 91 - see implementation of Omit
 *
 * 93(13) - Omit is not distributive
 *
 * 96 - if a function accepts union of Object, we can access common property without narrowing
 */

/**
 * @must see
 * 82.5 - how using interface to extends gives error when 2 interfaces have incompatible types. this is one advantage of using
 *  types over interface
 * 85 - index signature can also be used with interfaces,we can also give specific properties along with index signature
 * 89 - pick, omit pick also works with interfaces
 * 93(13) - Omit is not distributive.that explains need why some time libraries have such code,
 *  that doe snot seem to do anything
 *  In DeepSeek, see the meaning of distributive and
 *  then see implementation of distributive Omit
 */
