/**
 *154.6 - here we saw how to use Object.keys
 */

/**
 *@ToBeSeen
 *
 * 150 - see lecture.
 *  see figure 6 and 7.
 *
 *  {} represents anything except null or undefined.
 *  as per figure 7, their are 3 types at second level. so anything apart from null and
 *     undefined can be assigned to {}
 *
 * 151 - proper typing of object with no property
 *
 * 152 - way to trigger extra property check
 *
 * 153 - if we define return type for function, then we cannot return object with extra
 *   properties from function, provided object is inlined.
 *
 * 154 - Reason for why object.keys is typed as string. because ts lets you pass extra
 *  properties into object as speciffied by object type
 *
 *
 * 154.8 - evolving any, just see the code
 * 154.9 - evolving any for arrays
 * 155(Imp) - function does need to provide all argumnets when implementing it.
 *  but while calling it needs to provide all
 *
 * 156 - function parameters objects can have extra properties can required.
 * so when calling a function type which is union of functions types, parameter type  needs
 * to be intersection of all parameter types.
 *
 * 157 - when you have functions with incompatible type signatures being union together, you're
 * sometimes going to need to use as never in these situations to get yourself out of a bit of bother.
 *
 * 158 - When we have union of function, parameter types intersect togather and return types union
 * togather
 *
 */
