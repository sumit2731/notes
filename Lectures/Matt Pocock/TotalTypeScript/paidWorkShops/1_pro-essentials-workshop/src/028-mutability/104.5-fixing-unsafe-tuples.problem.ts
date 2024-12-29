type Coordinate = [number, number];
const myHouse: Coordinate = [0, 0];

/**
 * Our tuple myHouse contains two elements, and the dangerousFunction is structured to pop two 
 * elements from the given array.
  Given that pop removes the last element from an array, calling dangerousFunction with myHouse will
  remove its contents.Currently, TypeScript does not alert us to this potential issue, as seen by 
  the error line under @ts-expect-error:
 */
const dangerousFunction = (arrayOfNumbers: number[]) => {
  arrayOfNumbers.pop();
  arrayOfNumbers.pop();
};

dangerousFunction(
  // @ts-expect-error
  myHouse
);
