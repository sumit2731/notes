/**
 * 1)see definiition of extends in conditional types docs.
 * 
 * 2)how extends works in case of union type, see example in mapped type documentation.
 *  when we say Union typ extends someType, that means each member of UnionType extends that type
 */

/**
 * here employee extends perosn
 */
let person = {
    name: 'sumeet'
  }
  
  let employee = {
    name: 'sumeet',
    id:1
  }
  
  person = employee;
  person.name