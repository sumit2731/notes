type SomeObject = {
  a: string;
  b: number;
};

/* 

type newType = { type: a} | {type: b}

*/

//solution1

type newType = {
  [prop in keyof SomeObject]: { key: prop };
}[keyof SomeObject];

//solutio2

type DerivedType<ObjectType> = {
  [prop in keyof ObjectType]: { key: prop };
}[keyof ObjectType];

type newType2 = DerivedType<SomeObject>;
