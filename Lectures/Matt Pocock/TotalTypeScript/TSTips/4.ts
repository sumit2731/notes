//Use function overloads and generics to type a compose function

function compose(...args: any[]) {
  return {} as any;
}

const addOne = (a: number) => {
  return a + 1;
};

const numToString = (a: number) => {
  return a.toString();
};

const stringToNum = (a: string) => {
  return parseInt(a);
};

//Problem - here we are not getting aware about return type. also we can pass uncompatoble functions.

// signature => number => number
const addOneToString = compose(addOne);
// signature => number => string
const addOneToString2 = compose(addOne, numToString);
// signature => number => number
const addOneToString3 = compose(addOne, numToString, stringToNum);

//solution

/**
 * Using Function overloads and generics
 */

//this is triggered when composed is passed only one argument
export function compose2<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg;

export function compose2<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input2: FirstArg) => SecondArg
): (input: Input) => SecondArg;

export function compose2<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input2: FirstArg) => SecondArg,
  func3: (input2: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;

export function compose2(...args: any[]) {
  return {} as any;
}

// signature => number => number
const addOneToString4 = compose2(addOne);
// signature => number => string
const addOneToString5 = compose2(addOne, numToString);
// signature => number => number
const addOneToString6 = compose2(addOne, numToString, stringToNum);

//this throws the error
const addOneToString7 = compose2(numToString, addOne);
