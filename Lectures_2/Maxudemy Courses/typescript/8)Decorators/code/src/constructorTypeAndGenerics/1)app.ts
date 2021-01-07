class Author {
  name = "";
  constructor() {}
}

/**
 * @Desc here we do not know type of object returned by json2Instance. so we do not get IDE support for
 * properteties on Simon
 *
 */

/* 
type Constructor = new() => Object;
const json2Instance = (source: string, destinationConstructor: Constructor) =>Object.assign(new destinationConstructor(), JSON.parse(source)); 

*/
type Constructor<T> = new () => T;
const json2Instance = <T>(source: string, destinationConstructor: Constructor<T>): T => Object.assign(new destinationConstructor(), JSON.parse(source));

const simon = json2Instance('{"name":"simon"}', Author);
