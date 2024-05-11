/**
 * @Here we saw that it is okay to use random values as keys, but they where we are generating those
 *  random values is important.
 *
 * we should not generate them where we return jSX,because that way it will change each time our component
 *  is re-rendered, so it needs to remove the old elements and add new ones.
 *
 * Best way to add random keys is when we add a object to state.that way that key will not change in each re-render.
 *
 * which method was used to generate eid - crypto.randomUUID()
 */
